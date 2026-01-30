const express = require("express")
const router = express.Router()
const cart = require("../models/Cart.js")
const product = require("../models/products.js")

const isAuthentication = (req, res, next) => {
    const userId = req.query.userId
    if (userId) {
        return res.status(401).json({ "message": "Unauthorized.Login first" })
    }
    req.userId = userId
}
router.get("/", isAuthenticated, async (req, res) => {
    try {
        const cart = await Cart.findOne({ User: req.userId }).populate("items.product")
        if (!cart) {
            return res.status(200).json({ items: [] })
        }
    } catch (err) {
        console.log("error while adding products to cart", err)


        return res.status(500).json({ "message": "Internal server error" })
    }
})
router.post("/add", isAuthenticated, async (req, res) => {
    const { productId, quantity } = req.body
    try {
        let cart = await Cart.findOne({ user: req.userId })
        if (!cart) {
            Cart = new Cart({ user: req.userId, items: [] })
        }
        const existingItem = Cart.items.find((item) => item.product.toString() == productId)
        if (existingItem) {
            existingItem.quantity += quantity
        }
        else {
            const product = await Product.findById(productId)
            if (!product) {
                return res.status(404).json({ "message": "Product not found or out of stock" })
            }

            cart.items.push({ product: productId, quantity })
            await cart.save()
            return res.status(200).json({ "message": "Product added to cart successfully" })
        }
    }
    catch (err) {
        console.log("error while adding products to cart", err)
        return res.status(500).json({ "message": "Internal server error while adding to cart" })
    }
})
module.exports = router
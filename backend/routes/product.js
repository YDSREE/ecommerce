const express=require("express")
const route=express.Router()
const Product=require("../models/Product.js")

const isAdmin=(req,res,next)=>{
const {role}=req.body
if(role!="admin")
    return res.status(403).json({"message":"Access denied only can add a product"})
next()
}
route.post("/add",isAdmin,async(req,res)=>{
    try{
        const {name,price,description,category,stock}=req.body
        const newProduct=new Product({
            name,price,description,category,stock
        })
        await newProduct.save()
        return res.status(201).json({"message":"Product added successfully"})
    }
    catch(err){
        console.log("got the error from adding product",err)
    }
})
route.get("/",async (req,res)=>{
    try{
        const products=await Product.find()
        res.status(200).json(products)
    }
    catch(err){
        console.log("error while fetching the products",err)
        res.status(500).json({"message":"error while fetching products"})
    }
})
module.exports=route
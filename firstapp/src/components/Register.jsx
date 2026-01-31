import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import "./Register.css"
export default function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [address, setAddress] = useState("")
  const [mobile, setMobile] = useState("")

  const navigate = useNavigate()

  function handleRegister(e) {
    e.preventDefault()
    //console.log(e)
    let newUser = { name, email, mobile: Number(mobile), password, address }
    console.log(newUser)
    console.log(import.meta.env)
    console.log(import.meta.env.VITE_API_BACKEND)

    axios.post("https://ecommerce-6vie.onrender.com/api/create-user", newUser)
      .then((res) => {
        console.log(res.data)
        if (res.data.status === 201) {
          navigate("/login")
        }
      })

    setName("")
    setEmail("")
    setPassword("")
    setMobile("")
    setAddress("")
  }

  return (
    <div className="register-bg">
      <div className="register-card">
        <h3 className="register-title">Register Form</h3>

        <input
          type="text"
          className="form-control custom-input mb-4"
          placeholder="Full Name"
        />

        <input
          type="email"
          className="form-control custom-input mb-4"
          placeholder="Email"
        />

        <input
          type="password"
          className="form-control custom-input mb-4"
          placeholder="Password"
        />

        <input
          type="number"
          className="form-control custom-input mb-4"
          placeholder="Mobile Number"
        />
        <input
          type="text"
          className="form-control custom-input mb-4"
          placeholder="Address"
        />

        <button className="register-btn">Register</button>

        <div className="register-footer">
          Already have an account? <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
};



// name email password mobile address
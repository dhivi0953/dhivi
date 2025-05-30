import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
// import d from "./ddddd.jpg"

function Signup() {

    const[username,setUsername]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    // const navigate=useNavigate()

    const handleSubmit=()=>{
        const data={
            "username":username,
            "email":email,
            "password":password
        }
       try{
            fetch("",{
                method:"POST",
                headers:{'Content-type':'Application/json'},
                body:JSON.stringify(data)
             })
            .then(res=>res.json())
            .then(res1=>console.log(res1));
            // navigate('/login')
            alert("SignUp successful")

       }
        catch(error){
            console.error("err",error.message)
        }
     }

  return (
    <div className="signup-container">
  <h1>Create Account</h1>
  <form>
    <label htmlFor="username">Username</label>
    <input
      type="text"
      id="username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      required
    />
    <label htmlFor="email">Email</label>
    <input
      type="email"
      id="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
    <label htmlFor="password">Password</label>
    <input
      type="password"
      id="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
    <button type="submit" onClick={handleSubmit}>
      Sign Up
    </button>
  </form>
  <p>
    Already have an account? <Link to="/login">Login</Link>
  </p>
</div>

  )
}

export default Signup
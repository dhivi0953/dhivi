import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

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
    <div>
        <form action="SignUp">
            <h2>SignUp</h2>
            <label htmlFor="">Username </label>
            <input 
            type="text" 
            value={username}
            onChange={(e)=>setUsername(e.target.value)}/>
            <br />
            
            <label htmlFor="">E-mail</label>
            <input 
            type="email" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}/>
            <br />
            
            <label htmlFor="">Password</label>
            <input 
            type="text" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}/>
        </form>
        <br />
        <button onClick={handleSubmit} className='btn btn-signup'>Sign Up</button>
        <Link to="/"> Login</Link>
    </div>
  )
}

export default Signup
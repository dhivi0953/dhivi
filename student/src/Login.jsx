// import { useState } from 'react'
// import { useNavigate, Link } from 'react-router-dom'
// import "/App.css" React,

// function Login() {
//     const [name,setName]= useState ("")
//     const [password,setPassword] =useState ("")
//     const navigate = useNavigate()
//     const handleSubmit = async()=>{
//         const data ={
//             "username":name,
//             "password":password
//         }
//         try{
//             const postDAta =await fetch("/api", {
//                 method:"post",
//                 headers:{
//                     "content-type":"application/json"
//                 },
//                 body:JSON.stringify(data)
//                 const result = await data.json()
//                 console.log(result)
//                 navigate("./studentform")
            
//             })
//         }
//             catch(error){
//                 console.error("Error",error.message)
//             }
//         }
        
                

            
//   return (
//     <div className='container'>
//         <form action="" className='form_table'>
//             <br /><br />
//             <input type="text" id='name' value={name}
//             onChange={(e)=>setName(e.target.value)}/>
//             <br /><br />
//             <label htmlFor='password'>password</label>
//             <br /><br />
//             <input type="password" id='password' value={password}
//             onChange={(e)=> setPassword(e.target.value)}/>
//             <br /><br />
//             <button type="submit" className='btn btn-primary' onClick={handleSubmit}>Login</button>
//              <Link to="/signup">signup</Link>
//              </form>
//              </div>
//           )}


// export default Login

import React from 'react'
import { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'

function Login() {

    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const Navigate=useNavigate()

    const handleSubmit=()=>{
        const data={
            "username":username,
            "password":password
        }
       try{
           fetch("" ,{
                method:"post",
                headers:{'Content-type':'Application/json'},
                body: JSON.stringify(data)
             })
            .then(res=>res.json())
            .then(res1=>console.log(res1))
            // const result = await data.json()
            // console.log(result)

            Navigate("/form")
       }

        catch(error){
            console.log("error",error.message)
        }            
        
    }

  return (
    <div>
        <form action="">
            <h2>Login</h2>
            <label htmlFor="">Username </label>
            <input 
            type="text" 
            value={username}
            onChange={(e)=>setUsername(e.target.value)}/>
            <br /><br />
            
            <label htmlFor="">Password </label>
            <input 
            type="text" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}/>
            <br />
        </form>
        <br />
        <button onClick={handleSubmit} className='btn btn-Login'>Login</button>
        <Link to="/signup"> SignUp</Link>
    </div>
  )
}

export default Login
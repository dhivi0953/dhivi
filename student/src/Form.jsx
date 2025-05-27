import React, { useState } from 'react'
import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Form() {
    const[name,setName]=useState("")
    const[rollno,setRollno]=useState("")
    const[email,setEmail]=useState("")
    const navigate = useNavigate()
    const handleSubmit=()=>{
        const data = {
            "name":name,
            "rollno":rollno,
            "email":email,
        }
        try{
            fetch('',{
                method:'POST',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(data)
            })
            .then(res => res.json())
            .then(res1 => console.log(res1));
            navigate ('/biodata')

        }
        catch(error){
            console.error("err",error.message)
        }
    }

  return (
    <div className ='d-flex-direction-row justify-content-center'>
        <label htmlFor="">name</label>
        <input
        type="text"
        value={name}
        onChange={(e)=>setName(e.target.value)}/>
        <br />
        <label htmlFor="">rollno</label>
        <input
        type="text"
        value={rollno}
        onChange={(e)=>setRollno(e.target.value)}/>
        <br />
        <label htmlFor="">email</label>
        <input
        type="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}/>
       <br />

        <button onClick={handleSubmit} className='btn btn-primary'>submit</button>
        </div>
        
  )
}

export default Form
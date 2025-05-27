import React from 'react'
import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

function Biodata() {

    const[dept,setDept]=useState("")
    const[age,setAge]=useState("")
    const[gender,setGender]=useState("")
    const[mobile_no,setMobile_no]=useState("")
    const[stream,setStream]=useState("")
    // const Navigate=useNavigate()

    const handleSubmit=()=>{
        const data={
            "dept":dept,
            "age":age,
            "gender":gender,
            "mobile_no":mobile_no,
            "stream":stream
        }
       try{
            fetch("",{
                method:"POST",
                headers:{'Content-type':'Application/json'},
                body:JSON.stringify(data)
             })
            .then(res=>res.json())
            .then(res1=>console.log(res1));
            // const res=await data.json()
            // console.log(res)
            alert("Bio-data submitted")
       }
        catch(error){
            console.error("err",error.message)
        }
            
        
     }

  return (
    <div>
        <form action="Student Biodata">
            <h2>Student Bio-data</h2>
            <label htmlFor="">Department</label>
            <input 
            type="text" 
            value={dept}
            onChange={(e)=>setDept(e.target.value)}/>
            <br />

            <label htmlFor="">Age </label>
            <input 
            type="number" 
            value={age}
            onChange={(e)=>setAge(e.target.value)}/>
            <br />
            
            <label htmlFor="">Gender </label>
            <input 
            type="text" 
            value={gender}
            onChange={(e)=>setGender(e.target.value)}/>
            <br />
            
            <label htmlFor="">Mobile number </label>
            <input 
            type="number" 
            value={mobile_no}
            onChange={(e)=>setMobile_no(e.target.value)}/>
            <br />
            
            <label htmlFor="">Stream </label>
            <input 
            type="text" 
            value={stream}
            onChange={(e)=>setStream(e.target.value)}/>
        </form>
        <br />
        <button onClick={handleSubmit} className='btn btn-biodata'>Submit</button>
    </div>
  )
}

export default Biodata

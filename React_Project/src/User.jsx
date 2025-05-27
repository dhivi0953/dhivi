import React, { useState } from 'react'

function User() {
    const [title, setTitle] = useState("")
    const [userId, setUserId] =useState("")
     
    const handleSubmit =() =>{
        const User ={
            "title": title,
            "userId": userId,
            // "password" : password
        }
        try{
            fetch('http://dummyjson.com/post/add',{
                method:'POST',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(User)
            })
              
            .then(res => res.json())
            .then(res1 =>console.log(res1));
                }catch(error){
                     console.error("err",error.message);

                }
               
                
        }
    
  return (
    <div className='d-flex flex-direction-row justify-content-center'>
        <input
        type='text'
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
        />
        <input
        type='number'
        value={userId}
        onChange={(e)=>setUserId(e.target.value)}
        />
        <button onClick={handleSubmit}className='btn btn-primary'></button>
        </div>
  )
}

export default User
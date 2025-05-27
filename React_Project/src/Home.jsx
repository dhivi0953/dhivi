import React from 'react'
import{useNavigate}from'react-router-dom';

function Home() {
    const navigate=useNavigate();
    const handleNavigate=()=>{
        navigate("/child")
    }
        const handleNavigateUser=()=>{
          navigate("/user")
        
    }
  return (
    <div className='text center'>
<button 
className='btn btn-primary'
onClick={handleNavigate}>Go from child</button>
<button className='btn btn-primary'
onClick={handleNavigateUser}>Go From Child</button>
<h1>hi</h1>

    </div>
  )
}


export default Home
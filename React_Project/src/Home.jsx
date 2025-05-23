import React from 'react'
import{useNavigate}from'react-router-dom';

function Home() {
    const navigate=useNavigate();
    const handleNavigate=()=>{
        navigate("/child")
    }
  return (
    <div className='text center'>
<button 
className='btn btn-primary'
onClick={handleNavigate}>Go from child</button>
<h1>hi</h1>

    </div>
  )
}

export default Home
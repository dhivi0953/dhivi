import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form'
import { BrowserRouter  as Router, Routes, Route} from 'react-router-dom'
import React from 'react'
import Login from './Login'
import Signup from './Signup.'
import Biodata from './Biodata'

 
function App() {     
  return (
    <div>
      <Router>
      <Routes>
         <Route path="/signup" element={<Signup />}></Route>
        <Route path="/" element={<Login/>}></Route>
       
        <Route path="/form" element={<Form />}></Route>
        <Route path="/biodata" element={< Biodata/>}></Route>
      </Routes>
    </Router>
    </div>

  )
}

export default App

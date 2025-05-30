import React from 'react'
import Signup from './Signup'
import { BrowserRouter as  Router,Routes,Route } from 'react-router-dom'
 import  './App.css'
// import './Style.css'


function App() {
  return (
    <div>
      <Router>
      <Routes>
         <Route path="/" element={<Signup />}></Route>
         </Routes>
        </Router></div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Child from "./Child"
import Child1 from './Child1'


  
 function App() {
//   // const users = [
//     // { id: 1, name: "dhivi", age: 25, dept:"computer science"},
//     // { id: 2, name: "abi", age: 23, dept:"computer science" },
//     // { id: 3, name: "deepi", age: 22, dept:"computer science" },
//     // { id: 4, name: "natchu", age: 21, dept:"computer science" },
//     // { id: 5, name: "guru", age: 26, dept:"computer science" },
    
//   // ]


//   // const [state, setState] = useState(10)
//   // const handleClick = () => {
//     // setState(state + 1)

    // const[name,setName]=useState("")
    // function handleClick(){
    //   alert("call from event")
    // }
  
// const[state,setState]=useState("")


const[name,setName]=useState("")
function handleClick(data){
  setName(data)
}
  return (
    
    <>
    
{/* 
      <button onClick={handleClick}>event trigger </button>
      <br/>
      <input
      type="text"
      value={name}
      onChange={(e)=>setName(e.target.value)}
    />
    <p>Hii,{name}</p> */}

{/*     
    <Child state={state}/>
    <Child1 setState={setState}/> */}


    <div className="container"></div>
    <div className="row mt-8"></div>
    <div className="col-12 text-center mt-5"></div>
    <Child onButtonClick={handleClick} name={name}/>
    <h1>{name}</h1>
    </>


  )
}



export default App

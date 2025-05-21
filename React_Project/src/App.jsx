import { useState } from 'react'
import './App.css'
import Child from "./Child"



  
function App() {
  const users = [
    { id: 1, name: "dhivi", age: 25, dept:"computer science"},
    { id: 2, name: "abi", age: 23, dept:"computer science" },
    { id: 3, name: "deepi", age: 22, dept:"computer science" },
    { id: 4, name: "natchu", age: 21, dept:"computer science" },
    { id: 5, name: "guru", age: 26, dept:"computer science" },
    
  ]


  const [state, setState] = useState(10)
  const handleClick = () => {
    setState(state + 1)
  }



  return (
    <>
      {/* <Child name={"dhivya"} age={19} department={"computer science"} />
      <Child name={"abiruba"} age={20} department={"computer science"} /> */}
      <Child users={users} />
      {/* <div>{state}</div>
      <div onClick={handleClick}>Increament</div>
      <button onClick={() => setState(state - 1)}>decrement</button> */}
    </>
  )
}

export default App

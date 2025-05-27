import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Child from "./Child"
import Child1 from './Child1'
import Home from "./Home"
import User from './User'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"



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


  // const[name,setName]=useState("")
  // function handleClick(data){
  //   setName(data)
  // }

  const [users, setUsers] = useState([])
     function data() {
     const res = fetch("https://dummyjson.com/products")
     .then((res) => res.json())
     .then((data) => setUsers(data.products))
      .catch((err) => console.log("err", err))

//       const res = await axios("https://dummyjson.com/products")
//       setUsers(res.data.products)
//       console.log(res.data.products)
// }     catch (error){
//   console.error("error", error.message)
// }
      
      
  }

  useEffect(() => {
    data()
  }, [])





  return (


    <>

      {/* {
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


      {/* <div className="container"></div>
    <div className="row mt-8"></div>
    <div className="col-12 text-center mt-5"></div>
    <Child onButtonClick={handleClick} name={name}/>
    <h1>{name}</h1> */}

      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/child" element={<Child users={users} />}> </Route>
          <Route path='/user' element={<User />}></Route>
        </Routes>
      </Router>
    </>


  )
}



export default App

import React, { useEffect } from 'react'
import App from './App'


// function Child({onButtonClick, name}) {
//     const sentData=()=>{
//         onButtonClick("this message from child!!")
//     }
//     // console.log({users})
//      return (
// //         <>
// //           <div>
// //                 {users.map((user) => (
                    
// //                         <ol key={user.id}>
// //                             <li>{user.name}</li>
// //                             <li>{user.age}</li>
// //                             <li>{user.dept}</li>
// //                         </ol>
// // ))}

// // <div>{state}</div>

// <div><button onClick={sentData} className='btn btn-danger'>clickMe</button></div>

         
          

//     )
// }

// export default Child

function Child({users}) {
    useEffect(()=>{
        console.log("enter in child component")
    },[users])



  return (
    <div className='text center'>
        {users.map(user=>(
            <h1 key={user.id}>{user.title}</h1>
        
      ))  }
      </div>
  )
}
  

export default Child
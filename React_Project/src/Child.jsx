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
    // useEffect(()=>{
    //     console.log("enter in child component")
    // },[users])



  return (
    <div className='card-container'>
      <div className='row'>
        {users.map(user=>(
          <div className='col-3' key={user.id}>
            <div className='card' style={{width:"18rem"}}>
            <img src={user.images} className="card-img-top" alt="show it"/>
            <div className="card-body">
              <h5 className="card-title">{user.title}</h5>
              <p className="card-text">some quick example to build on the card title and make up the bulk of the cards content.</p>
              <a href='#' className="btn btn-primary">Go somewhere</a>
      
            </div>
            </div>
            </div>
        
      ))  }
    
    </div>
    </div>
  )
}
  

export default Child
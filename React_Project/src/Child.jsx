import React from 'react'

function Child({ users }) {
    // console.log({users})
    return (
        <>
          <div>
                {users.map((user) => (
                    
                        <ol key={user.id}>
                            <li>{user.name}</li>
                            <li>{user.age}</li>
                            <li>{user.dept}</li>
                        </ol>
))}
         
          </div>
                
        </>

    )
}

export default Child
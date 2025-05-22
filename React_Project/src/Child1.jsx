import React from 'react'

function Child1({setState}) {
  return (
    <div><input
      type="text"
      onChange={(e)=>setState(e.target.value)}
      />
      </div>
      
  )
}

export default Child1
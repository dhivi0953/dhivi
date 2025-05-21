import React from 'react'

function form() {
  return (
    <div>class="form"
        <h3>login form</h3>
        <form action="login form">
            <label htmlFor="name">name</label>
            <input type="text" /><br/>
            <label htmlFor="department">department</label>
            <input type="text" /><br/>
            <label htmlFor="year">year</label>
            <input type="number" /><br/>
            <label htmlFor="email">email</label>
            <input type="email"/>
</form>
</div>
  )
}

export default form
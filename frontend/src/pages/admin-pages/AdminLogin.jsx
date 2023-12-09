import React from 'react'

function AdminLogin() {
  return (
    <div>
        
        <h1>AdminLogin </h1>


<div>
        <form action="POST">

          <label htmlFor="email">Email</label>
          <input placeholder= "admin-user@example.com" type="email" name="email" id="" />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" />

          <button type="submit">Log In</button>
  
        </form>

        </div>
        </div>
  )
}

export default AdminLogin
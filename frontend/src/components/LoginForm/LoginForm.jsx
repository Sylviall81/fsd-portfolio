import React from 'react'
import './LoginForm.css'

function LoginForm() {
  return (

    <div>
      <div className = "login-form-container">

        <h3>Login Form</h3>
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

export default LoginForm
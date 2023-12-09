import React from 'react'

function LoginForm() {
  return (

    <div>

        <h3>Login Form</h3>
            <form action="POST">
                <label htmlFor="email">Email</label>
                <input placeholder= "admin-user@example.com" type="email" name="email" id="" />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" />

            <button type="submit">Log In</button>
        </form>


    </div>


  )
}

export default LoginForm
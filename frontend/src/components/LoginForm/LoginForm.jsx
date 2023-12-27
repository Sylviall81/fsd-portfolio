import React from 'react'
import './LoginForm.css'
import NeutralButton from '../ButtonNeutral/NeutralButton'

function LoginForm() {
  return (
    <>
      <div className = "login-form-container">

      
            <form className = "login-form" action="POST">
                <label className = "login-form-label" htmlFor="email">Email</label>
                <input placeholder= "admin-user@example.com" type="email" name="email" id="" />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" />
                <NeutralButton type = "submit" text = "Login" link ="" />
            {/* <button type="submit">Log In</button> */}
           
        </form>

        </div>


    </>

  )
}

export default LoginForm
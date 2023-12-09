import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import RegisterForm from '../../components/RegisterForm/RegisterForm'


function AdminLogin() {
  return (
    <div>
        
        <h1>AdminLogin </h1>

        <div className= "login-form-container-left">
          <LoginForm/>
        </div>

        <div className= "register-form-container">
          <RegisterForm/>
        </div>

        <div className = "background-image-container-right">

        </div>



        </div>
  )
}

export default AdminLogin
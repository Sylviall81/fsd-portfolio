import React from 'react'
import LoginForm from '../../components/AdminComponents/LogInForm'
import Header from '../../components/Header'


export default function AdminLoginPage() {
  return (
    <> 
      <Header />

      <div className = "log-in-form-container-left">
        <LoginForm />
    
    </div>
     <div className = "image-container-right"></div> 
    
    </>
  )
}






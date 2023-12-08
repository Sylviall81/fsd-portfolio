import React from 'react'
import Header from '../../components/Header/Header';
import FormLogin from '../../components/AdminComponents/FormLogin';
import '../../index.css'



export default function AdminLoginPage() {
  return (
    <> 
      <Header />

      <div className = "form-log-in-container-left">

        <FormLogin />
        
    
    </div>
     <div className = "image-container-right"></div> 
    
    </>
  )
}






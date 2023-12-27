import React from 'react'
import RegisterForm from '../../../components/RegisterForm/RegisterForm'
import Layout from '../../../components/Layout'
import './AdminPanel.css'
import { AuthService } from '../../../services/AuthService'

function AdminPanel() {

  const auth = AuthService();

  const handleLogout = (e) => {
    e.preventDefault();
    auth.logout().then(res => {
      console.log(res)
      alert(res)
    } ).catch(error => console.log(error))

  }
  return (
    <>
    <Layout>

        <h1>
        AdminPanel
           <button onClick={handleLogout} >LogOut</button>
        </h1>

      

        
        


        <div className="register-form-container">
          <RegisterForm />
        </div>


        </Layout>

        </>
  )
}

export default AdminPanel
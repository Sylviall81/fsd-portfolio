import React from 'react'
import RegisterForm from '../../../components/RegisterForm/RegisterForm'
import Layout from '../../../components/Layout'
import './AdminPanel.css'

function AdminPanel() {
  return (
    <>
    <Layout>

        <h1>
        AdminPanel
        </h1>


        <div className="register-form-container">
          <RegisterForm />
        </div>


        </Layout>

        </>
  )
}

export default AdminPanel
import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import Layout from "../../components/Layout";
import "../admin-pages/AdminLogin.css";

function AdminLogin() {
  return (
    <>
      <Layout>
        <div className = "admin-login-page-container">

          <div className="background-image-container-left"></div>

          <div className="login-form-container-right">

          <h4 className = 'login-form-title'>Welcome</h4>
          <p className= "text-content" >Please, submit your email and password to access your admin panel.</p>

          <div className = "login-form-container-box">
          <LoginForm />
          </div>
        </div>

        </div>

        
      </Layout>
    </>
  );
}

export default AdminLogin;

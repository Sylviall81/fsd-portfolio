import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import Layout from "../../components/Layout";

function AdminLogin() {
  return (
    <div>
      <Layout>
        <h1>AdminLogin </h1>

        <div className="login-form-container-left">
          <LoginForm />
        </div>

        <div className="register-form-container">
          <RegisterForm />
        </div>

        <div className="background-image-container-right"></div>
      </Layout>
    </div>
  );
}

export default AdminLogin;

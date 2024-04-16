import React from "react";
import RegisterForm from "../../../components/RegisterForm/RegisterForm";
import Layout from "../../../components/Layout";
import "./AdminPanel.css";
import { AuthService } from "../../../services/AuthService";
import ProjectForm from "../../../components/ProjectForm/ProjectForm";
import MessageBoard from "../../../components/MessageBoard/MessageBoard";
import { NavLink } from "react-router-dom";
//import NewProjectForm from '../../../components/NewProjectForm/NewProjectForm'

function AdminPanel() {
  const auth = AuthService();

  const handleLogout = (e) => {
    e.preventDefault();
    auth
      .logout()
      .then((res) => {
        console.log(res);
        localStorage.removeItem("auth_token");
        alert(res.data.msg);
      })
      .catch((error) => {
        // Capturar errores en la solicitud de logout
        console.error("Error al realizar la solicitud de logout:", error);
        alert(
          "Error al realizar la solicitud de logout. Por favor, inténtalo de nuevo más tarde."
        );
      });
  };

  /*const handleLogout = (e) => {
    e.preventDefault();
    auth.logout()
      .then(res => {
        // Verificar la respuesta del servidor
        if (res.data && res.data.msg) {
          console.log(res.data.msg);
          alert(res.data.msg);
        } else {
          console.log("Mensaje no recibido del servidor.");
          alert("Mensaje no recibido del servidor.");
        }
        // Limpiar el token de autenticación del localStorage
        localStorage.removeItem('auth_token');
      })
      .catch(error => {
        // Capturar errores en la solicitud de logout
        console.error("Error al realizar la solicitud de logout:", error);
        alert("Error al realizar la solicitud de logout. Por favor, inténtalo de nuevo más tarde.");
      });
  }; */

  return (
    <>
      <Layout>

        <h1>
          AdminPanel
          <button onClick={handleLogout}>LogOut</button>
        </h1>
        <h3>Bienvenid@ a tu panel de administrador</h3>
      
        <nav className="admin-nav">
          <NavLink Link='#message-board'>Check Message Board</NavLink>
          <NavLink Link='#new-project' >Add Projects</NavLink>
          <NavLink Link='#new-admin'>Manage Users</NavLink>
        </nav>
      
        <div className="sections-wrapper">
          <div id="message-board" className="message-board-container">
            <MessageBoard />
          </div>

          <div className="row-container">
              <div id="new-project" className="new-project-form">
                <h3>Ingresa los datos de un nuevo proyecto:</h3>
                <ProjectForm />
              </div>

              <div id="new-admin" className="register-form-container">
                 <h3> Ingresa un nuevo usuario administrador</h3>
                 <RegisterForm />
               </div>

          </div>
          
        </div>{" "}
        {/*cierre de section wrapper*/}
      </Layout>
    </>
  );
}

export default AdminPanel;

import React, {useState} from 'react'
import './LoginForm.css'
import NeutralButton from '../ButtonNeutral/NeutralButton';
import { AuthService } from '../../services/AuthService';

function LoginForm() {

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const auth = AuthService();

  const handleOnChange = (e) => {
    e.persist();
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value});
  };

   console.log('Datos del formulario:', loginData); 
   //--> prueba si funciona el handleOnchange

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar alguna acción con los datos del formulario, como enviarlos a un servidor
    auth.login(loginData).then(res => {
      console.log(res)}).catch(error => console.log(error));


    console.log('Datos de login:', loginData);
  };


  return (
    <>
      <div className = "login-form-container">

            <form className = "login-form" onSubmit={handleSubmit}>

                <label className = "login-form-label" htmlFor="email">Email</label>
                <input placeholder= "admin-user@example.com" type="email" name="email" id="login-email"  
                value={loginData.email}
                onChange={handleOnChange}
                required
                />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="login-password"  
                value={loginData.password}
                onChange={handleOnChange}
                required />

              <button type="submit" >Enviar</button>
               
            {/* <button type="submit"><NeutralButton text = "Login" link ="" /></button> */}
           
        </form>

        </div>


    </>

  )
}

export default LoginForm
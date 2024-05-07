import React,{useState}from 'react'
import NeutralButton from '../ButtonNeutral/NeutralButton'
import { AuthService } from '../../services/AuthService';
import './RegisterForm.css'

export default function RegisterForm() {

  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const auth = AuthService();

  const handleOnChange = (e) => {
    e.persist();
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value
    });
  };

  //console.log('Datos del formulario:', registerData); --> prueba si funciona el handleOnchange

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar alguna acción con los datos del formulario, como enviarlos a un servidor
    auth.register(registerData).then(res => {
      console.log(res)}).catch(error => console.log(error));


    console.log('Datos del formulario:', registerData);
  };


  return (
    <div>

        <h3>Register Form</h3>
            <form onSubmit={handleSubmit}>
               
            <label htmlFor="name">Name</label>
                <input placeholder= "Jane Doe" type="text" name="name"
                  value={registerData.name}
                  onChange={handleOnChange}
                  required
                />

                <label htmlFor="email">Email</label>
                <input placeholder= "admin-user@example.com" type="email" name="email" id="register-email" 
                  value={registerData.email}
                  onChange={handleOnChange}
                  required
                />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="register-password" 
                  value={registerData.password}
                  onChange={handleOnChange}
                  required
                />

            <button type="submit"><NeutralButton text="SUBMIT"/></button>
            {/* <NeutralButton type="submit" text="SUBMIT" link= "" /> */}
        </form>


    </div>
  )
}

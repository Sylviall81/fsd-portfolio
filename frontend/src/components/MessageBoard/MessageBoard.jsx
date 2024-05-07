import React from 'react'
import './MessageBoard.css'
import { Link } from 'react-router-dom'

function MessageBoard({contact_id,name,subject,message,phone,email, contact_date}) {

   // Crear un objeto Date con la fecha de la API
  const date = new Date(contact_date);
  

// Obtener los componentes de la fecha (año, mes, día)
const year = date.getFullYear();
const month = date.getMonth() + 1; // Los meses en JavaScript van de 0 a 11, por lo que debemos sumar 1
const day = date.getDate();

// Formatear la fecha en un formato legible
const formattedDate = `${day}/${month}/${year}`; // Puedes ajustar el formato según tus preferencias




  return (
    <>
    
        <tr>
          <td className="message-board-cell">{name}</td>
          <td className="message-board-cell"colSpan={2}> Phone:{phone ? phone : "No Enviado"} | Email:{email}</td>
          <td className="message-board-cell">{subject}</td>
          <td className="message-board-cell" colSpan={2}>{message.length <= 30 ? message : message.substring(0,30)+'...' } <li><Link>Ver Mas..</Link></li></td>
          <td className="message-board-cell">{formattedDate}</td>
        </tr>
   
  </>
  )
}

export default MessageBoard
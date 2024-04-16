import React from 'react'
import './MessageBoard.css'
import { Link } from 'react-router-dom'

function MessageBoard({contact_id,name,subject,message,phone,email, contact_date}) {

  
  return (
    <>
    
        <tr>
          <td className="message-board-cell">{contact_id}</td>
          <td className="message-board-cell">{name}</td>
          <td className="message-board-cell"colSpan={2}> Phone:{phone ? phone : "No Enviado"} | Email:{email}</td>
          <td className="message-board-cell">{subject}</td>
          <td className="message-board-cell" colSpan={2}>{message.length <= 30 ? message : message.substring(0,30)+'...' } <li><Link>Ver Mas..</Link></li></td>
          <td className="message-board-cell">{contact_date}</td>
        </tr>
   
  </>
  )
}

export default MessageBoard
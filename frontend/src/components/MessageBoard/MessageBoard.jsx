import React from 'react'
import './MessageBoard.css'

function MessageBoard({contact_id,name,subject,message,phone,email, contact_date}) {

  


  return (
    <div>
    <table className="message-board-table">
      <thead>  
        <tr>
          <th className="message-board-header-title" colSpan="100%"> Recent Contacts </th>
        </tr> 
        <tr>
          <th className="message-board-header-colspan">Id</th>
          <th className="message-board-header-colspan">Name</th>
          <th className="message-board-header-colspan" colSpan={2}>Contact Info</th>
          <th className="message-board-header-colspan">Subject</th>{/*podria ser una especie de categoria con select*/} 
          <th className="message-board-header-colspan" colSpan={2}>Message</th>
          <th className="message-board-header-colspan">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="message-board-cell">{contact_id}</td>
          <td className="message-board-cell">{name}</td>
          <td className="message-board-cell"colSpan={2}> Phone:{phone} | Email:{email}</td>
          <td className="message-board-cell">{subject}</td>
          <td className="message-board-cell" colSpan={2}>{message}</td>
          <td className="message-board-cell">{contact_date}</td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default MessageBoard
import React from 'react'
import './MessageBoard.css'

function MessageBoard() {



  return (
    <div>
    <table className="message-board-table">
      <thead>  
        <tr>
          <th className="message-board-header-title" colSpan={6}> Recent Contacts </th>
        </tr> 
        <tr>
          <th className="message-board-header-colspan">Name</th>
          <th className="message-board-header-colspan" colSpan={2}>Contact Info</th>
          <th className="message-board-header-colspan" colSpan={2}>Message</th>
          <th className="message-board-header-colspan">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="message-board-cell"></td>
          <td className="message-board-cell" colSpan={2}></td>
          <td className="message-board-cell" colSpan={2}></td>
          <td className="message-board-cell"></td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default MessageBoard
import React from "react";
import { Link } from "react-router-dom";
import "./MessageBoard.css";

function MessageBoardFooter() {
  return (
    <tfoot>
      <tr className="message-board-header-title">
        <td colSpan="100%">
          Messages 1-5 <Link> Next {'>>'} </Link>
        </td>
      </tr>
    </tfoot>
  );
}

export default MessageBoardFooter;

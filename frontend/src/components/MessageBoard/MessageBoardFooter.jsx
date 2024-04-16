import React from "react";
import { Link } from "react-router-dom";
import "./MessageBoard.css";

function MessageBoardFooter({startIndex,lastIndex}) {
  return (
    <tfoot>
      <tr className="message-board-header-title">
        <td colSpan="100%">
          Messages {startIndex}-{lastIndex} <Link> Next {'>>'} </Link>
        </td>
      </tr>
    </tfoot>
  );
}

export default MessageBoardFooter;

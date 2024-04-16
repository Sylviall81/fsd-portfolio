import React from "react";
import "./MessageBoard.css";

function MessageBoardFooter({startIndex,lastIndex,onNextClick, onPrevClick}) {
  
  return (
    <tfoot>
      <tr className="message-board-header-title">


        
        <td colSpan="100%"> Messages {startIndex}-{lastIndex} 
        <br></br>
        <button onClick={onPrevClick}>{'<<'} Previous </button>
        <button onClick={onNextClick}>Next {'>>'}</button>
          
        </td>
      </tr>
    </tfoot>
  );
}

export default MessageBoardFooter;

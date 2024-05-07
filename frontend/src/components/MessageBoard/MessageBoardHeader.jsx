import React from "react";

function MessageBoardHeader() {
  return (
    <>
      <thead>
        <tr>
          <th className="message-board-header-title" colSpan="100%">
            {" "}
            Latest Contacts{" "}
          </th>
        </tr>
        <tr>
          <th className="message-board-header-colspan">Name</th>
          <th className="message-board-header-colspan" colSpan={2}>
            Contact Info
          </th>
          {/*Subject podria ser una especie de categoria con select*/}
          <th className="message-board-header-colspan">Subject</th>
          
          <th className="message-board-header-colspan" colSpan={2}>
            Message
          </th>
          <th className="message-board-header-colspan">Date</th>
        </tr>
      </thead>
    </>
  );
}

export default MessageBoardHeader;

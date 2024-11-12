import React from "react";
import cancel from "../../icons_FEtask/Cancelled.svg";
import "./Cancel.css";
function Cancel({CancelTickets}){
    return(
    <div className="Cancel-container">
       <h1><img src={cancel}/> Canceled </h1>
       {CancelTickets?.length > 0 ? (
        <ul>
          {CancelTickets.map(ticket => (
            <li key={ticket.id}>
              <h3>{ticket.title}</h3>
              <p>Status: {ticket.status}</p>
              <p>Priority: {ticket.priority}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Cancel tickets available</p>
      )}
    </div>
    );
}
export default Cancel;
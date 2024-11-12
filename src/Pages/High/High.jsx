import React from "react";
import up from "../../icons_FEtask/Img - High Priority.svg";
import plus from "../../icons_FEtask/add.svg";
import dots from "../../icons_FEtask/3 dot menu.svg";
import './High.css';
function High({ highPriorityTickets }) {
  
  console.log("High Priority Tickets in High Component:", highPriorityTickets);

  return (
    <div className="high-priority">
      <div className="header">
        <div className="header-left">
          <img src={up} alt="High Priority Icon" />
          <h1>High</h1>
        </div>
        <div className="header-right">
          <img src={plus} alt="Add Icon" />
          <img src={dots} alt="Dots Icon" />
        </div>
      </div>
      
      <div>
        {highPriorityTickets && highPriorityTickets.length > 0 ? (
          <div>
            <h2>High Priority Tickets</h2>
            <ul>
              {highPriorityTickets.map(ticket => (
                <p key={ticket.id} className="tickets">
                  <h3>{ticket.title}</h3>
                  <p>Status: {ticket.status}</p>
                  <p>Priority: {ticket.priority}</p>
                </p>
              ))}
            </ul>
          </div>
        ) : (
          <p>No high priority tickets available</p> 
        )}
      </div>
    </div>
  );
}

export default High;



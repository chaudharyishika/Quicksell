import React from "react";
import backlog from "../../icons_FEtask/Backlog.svg";
import plus from "../../icons_FEtask/add.svg";
import dots from "../../icons_FEtask/3 dot menu.svg";
import './Backlog.css'; 

function Backlog({ Backlogtickets }) {
  return (
    <div className="backlog-container">
      <div className="backlog-header">
        <div className="backlog-title">
          <img src={backlog} alt="Backlog Icon" />
          <h1>Backlog</h1>
        </div>
        <div className="backlog-actions">
          <img src={plus} alt="Add Icon" className="backlog-icon" />
          <img src={dots} alt="Menu Icon" className="backlog-icon" />
        </div>
      </div>

      {Backlogtickets?.length > 0 ? (
        <ul>
          {Backlogtickets.map(ticket => (
            <p key={ticket.id} className="tickets">
              <h3>{ticket.title}</h3>
              <p>Status: {ticket.status}</p>
              <p>Priority: {ticket.priority}</p>
            </p>
          ))}
        </ul>
      ) : (
        <p>No Backlog tickets available</p>
      )}
    </div>
  );
}

export default Backlog;

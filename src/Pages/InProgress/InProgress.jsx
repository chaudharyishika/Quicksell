import React from "react";
import progres from "../../icons_FEtask/in-progress.svg";
import plus from "../../icons_FEtask/add.svg";
import dots from "../../icons_FEtask/3 dot menu.svg";
import './InProgress.css'; 

function InProgress({ InProgresstickets }) {
  return (
    <div className="in-progress-container">
      <div className="in-progress-header">
        <div className="in-progress-title">
          <img src={progres} alt="Progress Icon" />
          <h1>Progress</h1>
        </div>
        <div className="in-progress-actions">
          <img src={plus} alt="Add Icon" className="in-progress-icon" />
          <img src={dots} alt="Menu Icon" className="in-progress-icon" />
        </div>
      </div>

      {InProgresstickets?.length > 0 ? (
        <ul>
          {InProgresstickets.map(ticket => (
            <p key={ticket.id} className="tickets">
              <h3>{ticket.title}</h3>
              <p>Status: {ticket.status}</p>
              <p>Priority: {ticket.priority}</p>
            </p>
          ))}
        </ul>
      ) : (
        <p>No In Progress tickets available</p>
      )}
    </div>
  );
}

export default InProgress;

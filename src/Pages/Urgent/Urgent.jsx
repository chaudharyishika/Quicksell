import React from "react";
import urgent from "../../icons_FEtask/SVG - Urgent Priority colour.svg";
import plus from "../../icons_FEtask/add.svg";
import dots from "../../icons_FEtask/3 dot menu.svg";
import './Urgent.css'; 

function Urgent({ UrgentTickets }) {
  return (
    <div className="urgent-container">
      <div className="urgent-header">
        <div className="urgent-title">
          <img src={urgent} alt="Urgent Priority Icon" />
          <h1>Urgent</h1>
        </div>
        <div className="urgent-actions">
          <img src={plus} alt="Add Icon" className="urgent-icon" />
          <img src={dots} alt="Menu Icon" className="urgent-icon" />
        </div>
      </div>

      {UrgentTickets && UrgentTickets?.length > 0 ? (
        <ul>
          {UrgentTickets.map(ticket => (
            <li key={ticket.id}>
              <h3>{ticket.title}</h3>
              <p>Status: {ticket.status}</p>
              <p>Priority: {ticket.priority}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Urgent tickets available</p>
      )}
    </div>
  );
}

export default Urgent;

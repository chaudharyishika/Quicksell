import React from "react";
import medium from "../../icons_FEtask/Img - Medium Priority.svg";
import plus from "../../icons_FEtask/add.svg";
import dots from "../../icons_FEtask/3 dot menu.svg";
import "./Medium.css";

function Medium({ mediumPriorityTickets }) {
  return (
    <div className="medium-priority">
      <div className="title">
        <div className="logo-text">
          <img src={medium} alt="Medium Priority Icon" />
          <h1>Medium</h1>
        </div>
        <div className="actions">
          <img src={plus} alt="Add Icon" />
          <img src={dots} alt="Dots Icon" />
        </div>
      </div>

      {/* Render Medium Priority Tickets */}
      <div className="ticket-list">
        {mediumPriorityTickets && mediumPriorityTickets.length > 0 ? (
          <div>
            <h2>Medium Priority Tickets</h2>
            <ul>
              {mediumPriorityTickets.map(ticket => (
                <p key={ticket.id} className="tickets">
                  <h3>{ticket.title}</h3>
                  <p>Priority: {ticket.priority}</p>
                </p>
              ))}
            </ul>
          </div>
        ) : (
          <p>No medium priority tickets available</p>
        )}
      </div>
    </div>
  );
}

export default Medium;

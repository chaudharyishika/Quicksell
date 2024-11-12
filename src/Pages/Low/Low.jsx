import React from "react";
import low from "../../icons_FEtask/Img - Low Priority.svg";
import plus from "../../icons_FEtask/add.svg";
import dots from "../../icons_FEtask/3 dot menu.svg";
import "./Low.css";
function Low({ lowPriorityTickets }) {
  return (
    <div className="low-priority">
      <div className="title">
        <div className="logo-text">
          <img src={low} alt="Low Priority Icon" />
          <h1>Low</h1>
        </div>
        <div className="actions">
          <img src={plus} alt="Add Icon" />
          <img src={dots} alt="Dots Icon" />
        </div>
      </div>

      <div className="ticket-list">
        {lowPriorityTickets && lowPriorityTickets.length > 0 ? (
          <div>
            <h2>Low Priority Tickets</h2>
            <ul>
              {lowPriorityTickets.map(ticket => (
                <p key={ticket.id} className="tickets">
                  <h3>{ticket.title}</h3>
                  <p>Priority: {ticket.priority}</p>
                </p>
              ))}
            </ul>
          </div>
        ) : (
          <p>No low priority tickets available</p>
        )}
      </div>
    </div>
  );
}

export default Low;


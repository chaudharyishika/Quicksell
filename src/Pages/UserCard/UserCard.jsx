import React from "react";
import plus from "../../icons_FEtask/add.svg";
import dots from "../../icons_FEtask/3 dot menu.svg";
import './UserCard.css'

function UserCard({ user, tickets }) {
  return (
    <div className="user-container">
      <div className="user-header">
        <div className="user-title">
          <h2>{user.name}</h2>
          <p>{tickets.length}</p>
          
        </div>
        <div className="user-actions">
          <img src={plus} alt="Add" className="user-icon"/>
          <img src={dots} alt="More options" className="user-icon"/>
        </div>
      </div>
      
        {tickets && tickets.length > 0 ? (
          <ul>
            {tickets.map(ticket => (
              <p key={ticket.id} className="tickets">
                <h4>{ticket.title}</h4>
                <p>Status: {ticket.status}</p>
                <p>Priority: {ticket.priority}</p>
              </p>
            ))}
          </ul>
        ) : (
          <p>No tickets assigned to this user.</p>
        )}
      
    </div>
  );
}

export default UserCard;






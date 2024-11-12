import React from "react";
import todo from "../../icons_FEtask/To-do.svg";
import plus from "../../icons_FEtask/add.svg";
import dots from "../../icons_FEtask/3 dot menu.svg";
import './Todo.css'; 

function Todo({ todotickets }) {
  console.log("Todo Tickets in Todo Component:", todotickets);

  return (
    <div className="todo-container">
      <div className="todo-header">
        <div className="todo-title">
          <img src={todo} alt="Todo Icon" />
          <h1>Todo</h1>
        </div>
        <div className="todo-actions">
          <img src={plus} alt="Add Icon" className="todo-icon" />
          <img src={dots} alt="Menu Icon" className="todo-icon" />
        </div>
      </div>
      <div >
      {todotickets?.length > 0 ? (
        <ul>
          {todotickets.map(ticket => (
            <p key={ticket.id} className="tickets">
              <h3>{ticket.title}</h3>
              <p>Status: {ticket.status}</p>
              <p>Priority: {ticket.priority}</p>
            </p>
          ))}
        </ul>
      ) : (
        <p>No Todo tickets available</p>
      )}
      </div>
    </div>
  );
}

export default Todo;


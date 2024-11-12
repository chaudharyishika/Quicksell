import React, { useEffect, useState } from "react";
import axios from "axios";
import Todo from "./Pages/Todo/Todo";
import InProgress from "./Pages/InProgress/InProgress";
import High from "./Pages/High/High";
import Backlog from "./Pages/Backlog/Backlog";
import Medium from "./Pages/Medium/Medium";
import Low from "./Pages/Low/Low";
import Urgent from "./Pages/Urgent/Urgent";
import Cancel from "./Pages/Cancel/Cancel";
import UserCard from "./Pages/UserCard/UserCard";
import FilterMenu from "./Pages/Filter/FilterMenu"; 
import './ApiData.css'; 

function ApiData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [groupBy, setGroupBy] = useState("status"); 
  const [sortBy, setSortBy] = useState("priority"); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment");
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const tickets = data?.tickets || [];
  const users = data?.users || [];

  let groupedTickets = {};

  if (groupBy === "status") {
    groupedTickets = tickets.reduce((groups, ticket) => {
      groups[ticket.status] = groups[ticket.status] || [];
      groups[ticket.status].push(ticket);
      return groups;
    }, {});
  } else if (groupBy === "user") {
    groupedTickets = tickets.reduce((groups, ticket) => {
      groups[ticket.userId] = groups[ticket.userId] || [];
      groups[ticket.userId].push(ticket);
      return groups;
    }, {});
  } else if (groupBy === "priority") {
    groupedTickets = tickets.reduce((groups, ticket) => {
      const priority = ticket.priority;

      if (priority === 4) {
        groups.urgent = groups.urgent || [];
        groups.urgent.push(ticket);
      } else if (priority === 3) {
        groups.high = groups.high || [];
        groups.high.push(ticket);
      } else if (priority === 2) {
        groups.medium = groups.medium || [];
        groups.medium.push(ticket);
      } else if (priority === 1) {
        groups.low = groups.low || [];
        groups.low.push(ticket);
      } else if (priority === 0) {
        groups.noPriority = groups.noPriority || [];
        groups.noPriority.push(ticket);
      }
      return groups;
    }, {});
  }

  
  const sortTickets = (ticketList) => {
    if (sortBy === "priority") {
      return ticketList.sort((a, b) => a.priority - b.priority); 
    } else if (sortBy === "title") {
      return ticketList.sort((a, b) => a.title.localeCompare(b.title)); 
    }
    return ticketList;
  };

  Object.keys(groupedTickets).forEach(key => {
    groupedTickets[key] = sortTickets(groupedTickets[key]);
  });

  return (
    <div>
      <FilterMenu 
        groupBy={groupBy} 
        setGroupBy={setGroupBy} 
        sortBy={sortBy} 
        setSortBy={setSortBy} 
      />
      
      <div className="ticket-container">
        {groupBy === "priority" && (
          <>
            <Urgent urgentTickets={groupedTickets.urgent || []} />
            <High highPriorityTickets={groupedTickets.high || []} />
            <Medium mediumPriorityTickets={groupedTickets.medium || []} />
            <Low lowPriorityTickets={groupedTickets.low || []} />
            <div className="no-priority">
              <h3>No Priority</h3>
              {groupedTickets.noPriority && groupedTickets.noPriority.length > 0 ? (
                <p>
                  {groupedTickets.noPriority.map(ticket => (
                    <p key={ticket.id}>No Tickets</p>
                  ))}
                </p>
              ) : (
                <p>No tickets with no priority.</p>
              )}
            </div>
          </>
        )}

        {groupBy === "status" && (
          <>
            <Todo todotickets={groupedTickets.Todo || []} />
            <InProgress InProgresstickets={groupedTickets["In progress"] || []} />
            <Backlog Backlogtickets={groupedTickets.Backlog || []} />
            <Urgent UrgentTickets={groupedTickets.Urgent || []} />
            <Cancel CancelTickets={groupedTickets.Cancel || []} />
          </>
        )}

        {groupBy === "user" && (
          <>
            {users.map(user => {
              const userTickets = groupedTickets[user.id] || [];
              return <UserCard key={user.id} user={user} tickets={userTickets} />;
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default ApiData;



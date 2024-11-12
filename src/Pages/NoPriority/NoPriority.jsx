import React from "react"
function NoPriority(){
    return(
<p>
                  {groupedTickets.noPriority.map(ticket => (
                    <p key={ticket.id}>No Tickets</p>
                  ))}
                </p>
              ) : (
                <p>No tickets with no priority.</p>
              )});
            }
const TicketInfo = ({ ticketInfo }) => {
  console.log(ticketInfo, "added");
  return (
    <div className="trello">
      {ticketInfo?.map((ticket) =>
        ticket.cat === "Backlog" ? (
          <div className="board">
            <h4 className="title"> {ticket.cat}</h4>
            <ul>
              {ticket?.data.map((data, i) => (
                <li key={i}> {data} </li>
              ))}
            </ul>
          </div>
        ) : ticket.cat === "In Development" ? (
          <div className="board">
            <h4 className="title"> {ticket.cat}</h4>
            <ul>
              {ticket?.data.map((data, i) => (
                <li key={i}> {data} </li>
              ))}
            </ul>
          </div>
        ) : ticket.cat === "Review" ? (
          <div className="board">
            <h4 className="title"> {ticket.cat}</h4>
            <ul>
              {ticket?.data.map((data, i) => (
                <li key={i}> {data} </li>
              ))}
            </ul>
          </div>
        ) : ticket.cat === "Done" ? (
          <div className="board">
            <h4 className="title"> {ticket.cat}</h4>
            <ul>
              {ticket?.data.map((data, i) => (
                <li key={i}> {data} </li>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default TicketInfo;

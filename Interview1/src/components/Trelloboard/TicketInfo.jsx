const TicketInfo = ({ ticketInfo }) => {
  console.log(ticketInfo, 'added');
  const categories = ['Backlog', 'In Development', 'Review', 'Done'];

  return (
    <div className="trello">
      {categories
        .filter((cat) =>
          ticketInfo.some(
            (ticket) => ticket.cat === cat && ticket.data.length > 0
          )
        )
        .map((category) => (
          <div key={category} className="board">
            <h4 className="title">{category}</h4>
            <ul>
              {ticketInfo
                ?.filter((ticket) => ticket.cat === category)
                ?.map((ticket) =>
                  ticket.data.map((data, i) => <li key={i}>{data}</li>)
                )}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default TicketInfo;

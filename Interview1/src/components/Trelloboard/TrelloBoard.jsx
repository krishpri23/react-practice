import { useState } from "react";
import TicketInfo from "./TicketInfo";

const TrelloBoard = () => {
  const [value, setValue] = useState("");

  const [category, setCategory] = useState("");
  const categories = ["Backlog", "In Development", "Review", "Done"];

  const [ticketInfo, setTicketInfo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTicketInfo((prev) => {
      // check if cat exists
      const categoryExists = prev.find((cat) => cat.cat === category);

      if (categoryExists) {
        return prev.map((ticket) =>
          ticket.cat === category
            ? { ...ticket, data: [ticket.data, value] }
            : ticket
        );
      } else {
        return [
          ...prev,
          {
            cat: category,
            data: [value],
          },
        ];
      }
    });

    setValue("");
  };

  console.log(ticketInfo, "added");

  return (
    <div>
      <h1> Trello board </h1>
      {ticketInfo.length >= 1 && <TicketInfo ticketInfo={ticketInfo} />}

      <form onSubmit={(e) => handleSubmit(e)} className="trello-form">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option> Select a category </option>
          {categories.map((cat, i) => (
            <option key={i}> {cat}</option>
          ))}
        </select>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button> Add ticket </button>
      </form>
    </div>
  );
};

export default TrelloBoard;

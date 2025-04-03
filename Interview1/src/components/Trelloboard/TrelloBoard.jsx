import { useState } from 'react';
import TicketInfo from './TicketInfo';

const TrelloBoard = () => {
  const [value, setValue] = useState('');

  const [category, setCategory] = useState('');
  const categories = ['Backlog', 'In Development', 'Review', 'Done'];

  const [ticketInfo, setTicketInfo] = useState([]);

  const handleAdd = (e) => {
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

    setValue('');
  };

  const handleRemove = () => {
    setTicketInfo((prev) => {
      const data = prev.find((ticket) => ticket.cat === category);

      if (data) {
        return prev.data.filter((data) => data !== value);
      } else {
        alert('no such value');
      }
    });
  };

  console.log(ticketInfo, 'added');

  return (
    <div>
      <h1> Trello board </h1>
      {ticketInfo.length >= 1 && <TicketInfo ticketInfo={ticketInfo} />}

      <form className="trello-form" onSubmit={(e) => e.preventDefault()}>
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

        <button onClick={(e) => handleAdd(e)}> Add </button>
        <button onClick={() => handleRemove()}>Remove </button>
        <button>Edit</button>
      </form>
    </div>
  );
};

export default TrelloBoard;

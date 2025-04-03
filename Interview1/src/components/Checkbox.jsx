// create a checkbox with the list of items and display X when checkbox is selected

import { useState } from 'react';

const Checkbox = () => {
  const arr = ['Play games', 'Read a book', 'Eat food'];

  const [newArr, setNewArr] = useState(arr);
  const [checkedItems, setCheckedItem] = useState(
    arr.reduce(
      (acc, item) => ({
        ...acc,
        [item]: false,
      }),
      {}
    )
  );

  const handleChecked = (item) => {
    setCheckedItem((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  const handleDelete = (item) => {
    setNewArr((prev) => prev.filter((i) => i !== item));
  };

  return (
    <div className="home">
      {newArr.map((item, i) => (
        <li key={i} style={{ listStyle: 'none' }}>
          <input
            type="checkbox"
            checked={checkedItems[item]}
            onChange={() => handleChecked(item)}
          />
          {item}

          {checkedItems[item] && (
            <button onClick={() => handleDelete(item)}> X </button>
          )}
        </li>
      ))}
    </div>
  );
};

export default Checkbox;

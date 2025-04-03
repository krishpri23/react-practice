/* 
- Setting a fixed height to task container and create scrollable when exceeded
- Scroll to the latest task added in the container by attaching "ref" to the last added task div

*/
import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Todo() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [taskData, setTaskData] = useState([]);
  const lastTaskRef = useRef(null);

  useEffect(() => {
    if (lastTaskRef.current) {
      lastTaskRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [taskData]);

  const handleAddTask = () => {
    setShow(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('inside submit');
    setTaskData((prev) => [
      ...prev,
      {
        id: uuidv4(),
        title: title,
        description: description,
      },
    ]);
    console.log(taskData, 'Added');
    setTitle('');
    setDescription('');
  };

  return (
    <div className="App">
      <h1> Todo App </h1>
      <div className="todo">
        <button
          type="button"
          onClick={handleAddTask}
          style={{ display: show ? 'none' : 'block' }}
        >
          Add Task
        </button>
        <form
          className="form-container"
          style={{ display: show ? 'flex' : 'none' }}
        >
          <label htmlFor="title-input">Title</label>
          <input
            type="text"
            id="title-input"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="description-input">Description</label>
          <input
            type="text"
            id="description-input"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            {' '}
            Add task{' '}
          </button>
        </form>

        {taskData.length > 0 && (
          <div className="tasks-container">
            {taskData.map((item, index) => {
              console.log(item, 'inside');
              return (
                <div
                  key={item.id}
                  ref={index === taskData.length - 1 ? lastTaskRef : null}
                >
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

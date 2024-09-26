import { useEffect, useState } from "react";
import "./App.css";
import Accordian from "./components/Accordian";
import Checkbox from "./components/Checkbox";
import Dropdown from "./components/Dropdown";
import TrafficLights from "./components/TrafficLights";

function App() {
  // return <TrafficLights />;

  const [accordian, setAccordian] = useState([
    {
      id: 1,
      title: "Accordian 1",
      isOpen: false,
      body: "Hello from accordian 1",
      isChecked: false,
    },
    {
      id: 2,
      title: "Accordian 2",
      isOpen: false,
      body: "Hello from accordian 2",
      isChecked: false,
    },
    {
      id: 3,
      title: "Accordian 3",
      isOpen: false,
      body: "Hello from accordian 3",
      isChecked: false,
    },
  ]);

  const [allChecked, setAllChecked] = useState(false);

  useEffect(() => {
    console.log(accordian, "acc");
    // Check if all checkboxes are checked whenever the accordian state changes
    const allChecked = accordian.every((item) => item.isChecked);
    setAllChecked(allChecked);
  }, [accordian]);

  const handleCheckBox = (id) => {
    setAccordian((prev) =>
      prev.map((item) => {
        return {
          ...item,
          isChecked: item.id === id ? !item.isChecked : item.isChecked,
        };
      })
    );
    console.log("acc array", accordian);
  };

  const toggleAccordian = (id) => {
    setAccordian((prev) =>
      prev.map((item) => {
        return { ...item, isOpen: item.id === id ? !item.isOpen : false };
      })
    );
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("form submitted");
        }}
      >
        {accordian?.map((acc) => (
          <Accordian
            key={acc.id}
            accordian={acc}
            setAccordian={setAccordian}
            toggleAccordian={toggleAccordian}
            setAllChecked={setAllChecked}
            handleCheckBox={handleCheckBox}
          />
        ))}
        <button disabled={!allChecked}>Submit</button>
      </form>
    </div>
  );
}

export default App;

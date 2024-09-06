import { useState } from "react";
import "./App.css";
import usePasswordGenerator from "./components/usePasswordGenerator";

function App() {
  const [length, setLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    {
      text: "Include uppercase",
      state: true,
      charset: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    },
    {
      text: "Include lowercase",
      state: false,
      charset: "abcdefghijklmnoopqrstuvwxyz",
    },
    {
      text: "Include numbers",
      state: false,
      charset: "1234567890",
    },
    {
      text: "Include symbols",
      state: true,
      charset: ",./;'[]-!@#$%^&*",
    },
  ]);
  const [strength, setStrength] = useState(null);

  const handleCheckboxChange = (e) => {
    const { checked, value } = e.target;
    setCheckboxData((prev) =>
      prev.map((item) =>
        item.text === value ? { ...item, state: checked } : item
      )
    );
  };

  const passwordStrength = () => {
    if (length < 3) {
      setStrength("Poor");
    } else if (length < 6) {
      setStrength("Ok");
    } else if (length < 8) {
      setStrength("Good");
    } else if (length < 12) {
      setStrength("Super Strong");
    }
  };

  const { password, generatePassword, errMsg, setErrMsg } =
    usePasswordGenerator();

  return (
    <main className="root">
      {password && (
        <div className="header">
          <h2> {password} </h2>
          <button> Copy </button>
        </div>
      )}

      <div className="length">
        <h2>Character length : {length}</h2>
        <input
          type="range"
          min={0}
          max={12}
          id="slider"
          value={length}
          onChange={(e) => {
            setErrMsg(null);
            setLength(Number(e.target.value));
            console.log(length, "length inside setter");
          }}
        />
      </div>

      <div className="options">
        {checkboxData?.map((item) => (
          <div key={item.text} className="options-div">
            <input
              type="checkbox"
              checked={item.state}
              value={item.text}
              name="checkbox"
              onChange={(e) => handleCheckboxChange(e)}
            />
            <label htmlFor="checkbox"> {item.text}</label>
          </div>
        ))}
      </div>

      <div className="strength">
        <span> Strength : </span>
        <span> {strength} </span>
      </div>
      <button
        className="generate"
        onClick={() => generatePassword(length, checkboxData, passwordStrength)}
      >
        {" "}
        Generate password{" "}
      </button>

      {errMsg && <div className="error">{errMsg}</div>}
    </main>
  );
}

export default App;

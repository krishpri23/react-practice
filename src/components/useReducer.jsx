import { simpleReducer, INITIAL_STATE } from "../simpleReducer";
import { ACTION } from "../action";
import { useReducer } from "react";

export default function ReducerHook() {
  const [state, dispatch] = useReducer(simpleReducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch({
      type: ACTION.INPUT_CHANGE,
      payload: e.target.value
    });
  };
  const handleIncrement = () => {
    dispatch({
      type: ACTION.INCREMENT
    });
  };
  const handleDecrement = () => {
    dispatch({
      type: ACTION.DECREMENT
    });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0 auto ",
          width: "400px"
        }}
      >
        {" "}
        <input
          name="name"
          style={{ padding: "10px", border: "2px solid black" }}
          onChange={handleChange}
          value={state.name}
        />
        <br />
        <p> {state.count}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            margin: "0 auto ",
            width: "400px"
          }}
        >
          <button style={{ padding: "10px" }} onClick={handleIncrement}>
            {" "}
            +{" "}
          </button>
          <button style={{ padding: "10px" }} onClick={handleDecrement}>
            {" "}
            -{" "}
          </button>
        </div>
        <br />
        {state.name}
      </div>
    </>
  );
}

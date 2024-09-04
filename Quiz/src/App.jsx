import { useState } from "react";
import quiz from "./data";

function App() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect, e) => {
    if (isCorrect) {
      e.target.classList.add("correct");
      setScore((prev) => prev + 1);
    } else {
      e.target.classList.add("incorrect");
    }
  };

  const handleNext = () => {
    setIndex((prev) => prev + 1);
  };

  const resetGame = () => {
    setScore(0);
    setIndex(0);
  };

  return (
    <div className="container">
      <h1 className="title"> React Quiz </h1>
      <div className="quiz">
        {index < quiz.length ? (
          <>
            <h2 className="question">
              {" "}
              {index + 1}. {quiz[index].question}{" "}
            </h2>
            <div className="options">
              {quiz[index].answers?.map((option) => (
                <button
                  className="option-btn"
                  key={option.text}
                  onClick={(e) => handleAnswer(option.correct, e)}
                >
                  {" "}
                  {option.text}{" "}
                </button>
              ))}
            </div>
            <button className="next-btn" style={{}} onClick={handleNext}>
              {" "}
              Next{" "}
            </button>
          </>
        ) : (
          <>
            <h2> {`You have scored ${score} out of ${quiz.length}`} </h2>
            <button onClick={resetGame}> Play again </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

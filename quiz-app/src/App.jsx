import { useState } from "react";
import "./index.css";

function App() {
  const [select, isSelected] = useState(false);
  const quiz = [
    {
      question: "What is 2 + 2?",
      answers: [
        { text: "4", correct: true },
        { text: "22", correct: false },
      ],
    },
    {
      question: "Who is the best YouTuber?",
      answers: [
        { text: "Web Dev Simplified", correct: true },
        { text: "Traversy Media", correct: true },
        { text: "Dev Ed", correct: true },
        { text: "Fun Fun Function", correct: true },
      ],
    },
    {
      question: "Is web development fun?",
      answers: [
        { text: "Kinda", correct: false },
        { text: "YES!!!", correct: true },
        { text: "Um no", correct: false },
        { text: "IDK", correct: false },
      ],
    },
    {
      question: "What is 4 * 2?",
      answers: [
        { text: "6", correct: false },
        { text: "8", correct: true },
      ],
    },
  ];

  function handleAnswers() {}
  return (
    <main className="w-full ">
      <div className="w-3/4 h-screen mx-auto flex flex-col justify-center items-center bg-green-100">
        <h1> Simple Quiz App</h1>
        {!select && (
          <button
            className="px-10 py-3 border-none bg-fuchsia-400"
            onClick={() => isSelected(true)}
          >
            {" "}
            Start Game{" "}
          </button>
        )}

        {select &&
          quiz.map((question) => {
            <div className="bg-pink-100 w-1/2 flex flex-col items-center ">
              console.log('inside for each')
              <h2 className="text-center mt-10 mb-10"> {question.question} </h2>
              {question.answers.map((answer, index) => {
                <div className="flex flex-col gap-10 w-1/2 justify-center mx-auto">
                  <button className="primary" onClick={() => handleAnswers()}>
                    {answer[index]}
                  </button>
                  <button className="primary" onClick={() => handleAnswers()}>
                    {answer[index]}
                  </button>
                  <button className="primary" onClick={() => handleAnswers()}>
                    {answer[index]}
                  </button>
                  <button className="primary" onClick={() => handleAnswers()}>
                    {answer[index]}
                  </button>
                </div>;
              })}
            </div>;
          })}
      </div>
    </main>
  );
}

export default App;

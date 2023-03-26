import React from "react";
import "./style.css";
import NavAnimation from "../../../components/NavAnimation";
import { AnimatePresence } from "framer-motion";
export default function Quiz() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];
  const [currentQ, setCurrentQ] = React.useState(0);
  const [showScore, setShowScore] = React.useState(false);
  const [score, setScore] = React.useState(0);
  function handleClick(isCorrect) {
    if (isCorrect === true) {
      setScore((prev) => prev + 1);
    }

    if (currentQ + 1 < questions.length) {
      setCurrentQ((x) => x + 1);
    } else {
      setShowScore(true);
    }
  }

  return (
    <AnimatePresence mode="wait" >
		 <NavAnimation />
      <div className="background">
       

        <div
          className="app"
          style={{ color: "black" }}
        >
          {showScore ? (
            <div
              className="score-section"
              style={{ color: "black" }}
            >
              You scored {score} out of {questions.length}
            </div>
          ) : (
            <>
              <div
                className="question-section "
                style={{ color: "black" }}
              >
                <div
                  className="question-count"
                  style={{ color: "black" }}
                >
                  <span style={{ color: "black" }}>
                    Question {currentQ + 1}
                  </span>
                  /{questions.length}
                </div>
                <div
                  className="question-text"
                  style={{ color: "black" }}
                >
                  {questions[currentQ].questionText}
                </div>
              </div>
              <div className="answer-section">
                {questions[currentQ].answerOptions.map((answerOptions) => (
                  <button
                    className="answer-button"
                    onClick={() => handleClick(answerOptions.isCorrect)}
                  >
                    {answerOptions.answerText}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </AnimatePresence>
  );
}

import React, { useState, useEffect } from "react";

function QuizQuestion({ question, onAnswer, onNext }) {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const { category, difficulty, question: questionText, correct_answer, incorrect_answers } = question;

  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    // Shuffle the answers and store them in an array
    const shuffled = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5);
    setShuffledAnswers(shuffled);
  }, [correct_answer, incorrect_answers]);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    onAnswer(answer === correct_answer);
  };

  const handleNextClick = () => {
    setSelectedAnswer("");
    onNext();
  };

  return (
    <div>
      <div className="text-lg font-semibold mb-4">{category}</div>
      <div className="text-base font-medium mb-2">{difficulty}</div>
      <div className="text-2xl font-bold mb-6">{questionText}</div>
      <div className="flex flex-col">
        {shuffledAnswers.map((answer, index) => (
          <button
            key={index}
            className={`border rounded py-2 px-4 my-2 focus:outline-none ${
              selectedAnswer === answer ? (answer === correct_answer ? "bg-green-500 text-white" : "bg-red-500 text-white") : "bg-white text-gray-800"
            }`}
            onClick={() => handleAnswerClick(answer)}
            disabled={selectedAnswer !== ""}
          >
            {answer}
          </button>
        ))}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={handleNextClick}
        disabled={selectedAnswer === ""}
      >
        Next
      </button>
    </div>
  );
}

export default QuizQuestion;

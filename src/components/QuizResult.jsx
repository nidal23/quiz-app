import React from "react";

function QuizResult({ score, totalQuestions, onReset }) {
  const percentage = ((score / totalQuestions) * 100).toFixed(2);

  return (
    <div className="text-center">
      <div className="text-4xl font-bold mb-6">
        Quiz Completed! Your Score is {score}/{totalQuestions} ({percentage}%)
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={onReset}
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default QuizResult;

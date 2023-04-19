import React, { useState, useEffect } from "react";
import QuizQuestion from "./QuizQuestion";
import QuizResult from "./QuizResult";
import Timer from "./Timer";

function Quiz({ quizParams }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600);

  

  useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=20&category=${quizParams.category}&difficulty=${quizParams.difficulty}&type=${quizParams.type}`)
      .then((res) => res.json())
      .then((data) => setQuestions(data.results));
  }, [quizParams]);

  useEffect(() => {
    const quizIsOngoing = currentQuestion < questions.length && timeLeft > 0;
    
    if (quizIsOngoing) {
      const timerId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
  
      return () => clearInterval(timerId);
    }
  }, [timeLeft, questions.length, currentQuestion]);
  

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
        setCurrentQuestion(questions.length)
    }
  };

  const handleReset = () => {
    setScore(0);
    setCurrentQuestion(0);
    setTimeLeft(600);
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <div className="mb-4">
        <div className="text-xl font-bold mb-2">
          Question {currentQuestion + 1}/{questions.length}
        </div>
        {timeLeft > 0 && (
          <Timer timeLeft={timeLeft} onTimerEnd={handleReset} />
        )}
      </div>
      {currentQuestion === questions.length ? (
        <QuizResult score={score} totalQuestions={questions.length} onReset={handleReset} />
      ) : (
        <QuizQuestion
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
          onNext={handleNext}
        />
      )}
    </div>
  );
}

export default Quiz;

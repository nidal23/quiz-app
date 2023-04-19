
import React, { useState } from "react";
import Quiz from "./components/Quiz";
import QuizForm from "./components/QuizForm";


function App() {
  const [quizParams, setQuizParams] = useState(null);

  const handleQuizParamsChange = (params) => {
    setQuizParams(params);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {quizParams ? (
        <Quiz quizParams={quizParams} />
      ) : (
        <QuizForm onQuizParamsChange={handleQuizParamsChange} />
      )}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";

const QuizForm = ({ onQuizParamsChange }) => {
  const [quizParams, setQuizParams] = useState({
    category: "",
    difficulty: "",
    type: "",
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("https://opentdb.com/api_category.php");
      const data = await response.json();
      setCategories(data.trivia_categories);
    };
    fetchCategories();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setQuizParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onQuizParamsChange(quizParams);
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="category"
          >
            Select a category
          </label>
          <div className="relative">
            <select
              id="category"
              name="category"
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              value={quizParams.category}
              onChange={handleInputChange}
            >
              <option value="">Any Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 011.414 0l2.828 2.828a1 10 010 1.414L11.414 14l2.293 2.293a1 1 0 01-1.414 1.414L10 15.414l-2.293 2.293a1 1 0 01-1.414 0l-2.828-2.828a1 1 0 010-1.414L4.586 12 2.293 9.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="difficulty"
            >
              Select difficulty
            </label>
            <div className="relative">
              <select
                id="difficulty"
                name="difficulty"
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                value={quizParams.difficulty}
                onChange={handleInputChange}
              >
                <option value="">Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 011.414 0l2.828 2.828a1 10 010 1.414L11.414 14l2.293 2.293a1 1 0 01-1.414 1.414L10 15.414l-2.293 2.293a1 1 0 01-1.414 0l-2.828-2.828a1 1 0 010-1.414L4.586 12 2.293 9.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="type"
            >
              Select question type
            </label>
            <div className="relative">
              <select
                id="type"
                name="type"
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                value={quizParams.type}
                onChange={handleInputChange}
              >
                <option value="">Any Type</option>
                <option value="multiple">Multiple Choice</option>
                <option value="boolean">True / False</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 011.414 0l2.828 2.828a1 10 010 1.414L11.414 14l2.293 2.293a1 1 0 01-1.414 1.414L10 15.414l-2.293 2.293a1 1 0 01-1.414 0l-2.828-2.828a1 1 0 010-1.414L4.586 12 2.293 9.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Start Quiz
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default QuizForm;

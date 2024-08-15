import React, { useState } from "react";

const TodoContainer = ({ task, onToggleComplete, onDeleteTask }) => {
  const [isChecked, setIsChecked] = useState(task.completed);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onToggleComplete(task);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-4">
      <div className="flex justify-between items-center">
        <h3
          className={`text-lg font-bold ${
            isChecked ? "line-through" : "text-white"
          }`}
        >
          {task.description}
        </h3>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <span
            className={`${
              isChecked ? "bg-green-500" : "bg-red-500"
            } text-white py-1 px-3 rounded-full text-xs`}
          >
            {isChecked ? "Completed" : "Incomplete"}
          </span>
          <button
            className="ml-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded"
            onClick={() => onDeleteTask(task)}
          >
            Delete
          </button>
        </div>
      </div>
      <p className="text-gray-400 text-sm mt-2">
        <strong>Date:</strong> {task.date}
      </p>
    </div>
  );
};

export default TodoContainer;

import { useState } from "react";

const TodoForm = ({ onAddTask }) => {
  const [count, setCount] = useState(1); // Start ID counter from 1
  const [taskDetails, setTaskDetails] = useState({
    id: 0,
    description: "",
    completed: false,
    date: "",
  });

  const handleTask = () => {
    if (taskDetails.description.trim()) {
      onAddTask({
        ...taskDetails,
        id: count, // Assign a unique ID from the counter
      });
      setTaskDetails({
        id: 0,
        description: "",
        completed: false,
        date: "",
      });
      setCount(count + 1); // Increment the ID counter
    } else {
      alert("Please enter a valid task description.");
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex flex-col w-full">
        <label
          htmlFor="todo"
          className="text-lg font-semibold text-gray-300 mb-2"
        >
          Enter the Task
        </label>
        <input
          type="text"
          name="todo"
          id="todo"
          className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="What do you need to do?"
          value={taskDetails.description}
          onChange={(e) =>
            setTaskDetails((prev) => ({
              ...prev,
              description: e.target.value,
              date: new Date().toLocaleDateString(),
            }))
          }
        />
      </div>
      <button
        className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-6 rounded transition"
        onClick={handleTask}
      >
        Add Task
      </button>
    </div>
  );
};

export default TodoForm;

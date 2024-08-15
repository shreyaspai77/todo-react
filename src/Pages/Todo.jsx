import { useState } from "react";
import TodoContainer from "../Components/TodoContainer";
import TodoForm from "../Components/TodoForm";

const Todo = () => {
  const [allTasks, setAllTasks] = useState([]);
  const [showIncomplete, setShowIncomplete] = useState(false);

  const onAddTask = (task) => {
    setAllTasks([task, ...allTasks]);
  };

  const onToggleComplete = (updatedTask) => {
    setAllTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const onDeleteTask = (taskToDelete) => {
    setAllTasks(allTasks.filter((task) => task.id !== taskToDelete.id));
  };

  const incompleteTasks = allTasks.filter((task) => !task.completed);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white py-10">
      <h1 className="text-4xl font-bold mb-8">Todo App</h1>

      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        <TodoForm onAddTask={onAddTask} />
      </div>

      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg mt-6">
        <h2 className="text-2xl font-semibold mb-4">All Tasks</h2>
        {allTasks.length === 0 ? (
          <p className="text-gray-400">No tasks available.</p>
        ) : (
          allTasks.map((task) => (
            <TodoContainer
              key={task.id}
              task={task}
              onToggleComplete={onToggleComplete}
              onDeleteTask={onDeleteTask}
            />
          ))
        )}
      </div>

      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-6 transition"
        onClick={() => setShowIncomplete(!showIncomplete)}
      >
        {showIncomplete ? "Hide Incomplete Tasks" : "Show Incomplete Tasks"}
      </button>

      {showIncomplete && (
        <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg mt-6">
          <h2 className="text-2xl font-semibold mb-4">Incomplete Tasks</h2>
          {incompleteTasks.length === 0 ? (
            <p className="text-gray-400">No incomplete tasks.</p>
          ) : (
            incompleteTasks.map((task) => (
              <TodoContainer
                key={task.id}
                task={task}
                onToggleComplete={onToggleComplete}
                onDeleteTask={onDeleteTask}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Todo;

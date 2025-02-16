import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodolist] = useState([]);

  const addTodo = () => {
    if (todo.trim() !== "") {
      setTodolist([...todoList, todo]);
      setTodo(""); // Clear input after adding
    }
  };

  const removeTodo = (index) => {
    const updatedTodo = [...todoList];
    updatedTodo.splice(index, 1);
    setTodolist(updatedTodo);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">Todo List</h2>

        <div className="flex mb-4 space-x-2">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Enter a task"
            className="flex-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={addTodo}
            className="p-3 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3">
          {todoList.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-3 bg-gray-50 rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              <span className="text-lg text-gray-800">{item}</span>
              <button
                onClick={() => removeTodo(index)}
                className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;

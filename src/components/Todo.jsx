import React, { useState, useEffect } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodolist] = useState([]);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Load todo list from localStorage
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) setTodolist(savedTodos);
  }, []);

  // Save todo list to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = () => {
    if (todo.trim() !== "") {
      setTodolist([...todoList, { text: todo, completed: false, priority: "Medium", dueDate: "", tags: [], id: Date.now() }]);
      setTodo(""); // Clear input after adding
    }
  };

  const removeTodo = (id) => {
    setTodolist(todoList.filter((item) => item.id !== id));
  };

  const toggleComplete = (id) => {
    setTodolist(todoList.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const filteredTodos = todoList.filter(item => item.text.toLowerCase().includes(search.toLowerCase()));
  const completedTasks = todoList.filter((item) => item.completed).length;
  const progressPercentage = (completedTasks / todoList.length) * 100;

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500`}>
      <div className={`max-w-md w-full space-y-8 ${darkMode ? 'bg-gray-700' : 'bg-white'} p-8 rounded-lg shadow-lg border-2 border-gray-300 transition-all`}>
        <h2 className={`text-4xl font-semibold text-center ${darkMode ? 'text-indigo-400' : 'text-indigo-600'} mb-6 tracking-wide`}>
          Todo List
        </h2>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`absolute top-5 right-5 p-3 rounded-md ${darkMode ? 'bg-indigo-600' : 'bg-gray-600'} text-white hover:bg-indigo-700 transition-all`}
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>

        {/* Input Area (Add Task) */}
        <div className="flex mb-4 space-x-2">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Enter a task"
            className={`flex-1 p-3 border ${darkMode ? 'border-gray-600' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-indigo-500 transition-all text-lg`}
          />
          <button
            onClick={addTodo}
            className={`p-3 ${darkMode ? 'bg-indigo-600' : 'bg-indigo-600'} text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all`}
          >
            Add
          </button>
        </div>

        {/* Search Bar (Move Below Add Task) */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search tasks"
          className={`mb-4 w-full p-3 border ${darkMode ? 'border-gray-600' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-indigo-500 transition-all text-lg`}
        />

        {/* Todo List */}
        <ul className="space-y-3">
          {filteredTodos.map((item) => (
            <li
              key={item.id}
              className={`flex justify-between items-center p-4 ${item.completed ? 'bg-green-50' : 'bg-gray-50'} rounded-lg shadow-md hover:bg-gray-200 transition-all`}
            >
              <span className={`text-lg ${item.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                {item.text}
              </span>
              <div className="flex space-x-2">
                <button
                  onClick={() => toggleComplete(item.id)}
                  className={`p-2 rounded-md ${item.completed ? 'bg-green-500' : 'bg-gray-500'} text-white hover:bg-green-600 transition-all`}
                >
                  {item.completed ? "Undo" : "Complete"}
                </button>
                <button
                  onClick={() => removeTodo(item.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-all"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Enhanced Progress Bar */}
        <div className="mt-6">
          <p className={`text-center ${darkMode ? 'text-white' : 'text-gray-700'} text-lg font-semibold`}>
            Progress: {completedTasks} / {todoList.length} tasks completed
          </p>

          {/* Circular Progress */}
          <div className="flex justify-center items-center mt-6">
            <div className={`relative w-32 h-32 ${darkMode ? 'text-indigo-500' : 'text-indigo-600'} rounded-full flex justify-center items-center`}>
              <div className="absolute text-3xl font-semibold">
                {progressPercentage.toFixed(0)}%
              </div>
              <svg className="w-full h-full transform rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="text-gray-200"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M18 2 a16 16 0 1 1 0 32 a16 16 0 1 1 0 -32"
                />
                <path
                  className={`text-indigo-400`}
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray={`${progressPercentage}, 100`}
                  d="M18 2 a16 16 0 1 1 0 32 a16 16 0 1 1 0 -32"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;

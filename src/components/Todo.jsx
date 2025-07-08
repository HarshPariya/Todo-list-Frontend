import React, { useState, useEffect } from "react";
import axios from "axios";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");
  const [todoList, setTodolist] = useState([]);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [editTodoId, setEditTodoId] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("https://todo-list-backend-qedk.onrender.com/todos");
      setTodolist(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addTodo = async () => {
    if (todo.trim() !== "") {
      const newTodo = {
        text: todo,
        completed: false,
        priority,
        dueDate,
      };

      try {
        const response = await axios.post("https://todo-list-backend-qedk.onrender.com/todos", newTodo);
        setTodolist((prevTodoList) => [...prevTodoList, response.data]);
        setTodo("");
        setPriority("Medium");
        setDueDate("");
      } catch (err) {
        console.error(err);
      }
    }
  };

  const updateTodo = async (id, updatedTodo) => {
    try {
      const response = await axios.put(`https://todo-list-backend-qedk.onrender.com/${id}`, updatedTodo);
      setTodolist((prevTodoList) =>
        prevTodoList.map((item) => (item._id === id ? response.data : item))
      );
    } catch (err) {
      console.error(err);
    }
  };

  const removeTodo = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      try {
        await axios.delete(`https://todo-list-backend-qedk.onrender.com/todos/${id}`);
        setTodolist((prevTodoList) => prevTodoList.filter((item) => item._id !== id));
      } catch (err) {
        console.error(err);
      }
    }
  };

  const toggleComplete = async (id) => {
    const todoToUpdate = todoList.find((item) => item._id === id);
    const updatedTodo = { ...todoToUpdate, completed: !todoToUpdate.completed };

    try {
      const response = await axios.put(`https://todo-list-backend-qedk.onrender.com/${id}`, updatedTodo);
      setTodolist((prevTodoList) =>
        prevTodoList.map((item) => (item._id === id ? response.data : item))
      );
    } catch (err) {
      console.error(err);
    }
  };

  const clearCompleted = async () => {
    const confirmClear = window.confirm("Are you sure you want to clear completed tasks?");
    if (confirmClear) {
      try {
        await Promise.all(
          todoList
            .filter((item) => item.completed)
            .map((item) => axios.delete(`https://todo-list-backend-qedk.onrender.com/todos/${item._id}`))
        );
        setTodolist((prevTodoList) => prevTodoList.filter((item) => !item.completed));
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleEditTodo = (item) => {
    setEditTodoId(item._id);
    setTodo(item.text);
    setPriority(item.priority);
    setDueDate(item.dueDate);
  };

  const handleSaveEdit = async () => {
    const updatedTodo = { text: todo, completed: false, priority, dueDate };
    await updateTodo(editTodoId, updatedTodo);
    setEditTodoId(null);
    setTodo("");
    setPriority("Medium");
    setDueDate("");
  };

  const filteredTodos = todoList.filter((item) =>
    item.text.toLowerCase().includes(search.toLowerCase())
  );

  const completedTasks = todoList.filter((item) => item.completed).length;
  const progressPercentage = (completedTasks / todoList.length) * 100;

  return (
    <div
      className={`min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div
        className={`max-w-3xl w-full space-y-8 p-8 rounded-lg shadow-2xl border-2 border-gray-300 transition-all ${darkMode ? "bg-gray-800" : "bg-white"}`}
      >
        <h2 className={`text-5xl font-extrabold text-center ${darkMode ? "text-blue-400" : "text-blue-600"} mb-6`}>
          Todo List
        </h2>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`absolute top-5 right-5 p-4 rounded-full transition-all ${darkMode ? "bg-blue-600" : "bg-gray-600"} text-white`}
        >
          <span className="text-lg">{darkMode ? "🌙" : "🌞"}</span>
        </button>

        {/* Input Area (Add/Edit Task) */}
        <div className="flex flex-col sm:flex-row mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="What do you need to do?"
            className={`flex-1 p-4 border ${darkMode ? "border-gray-600" : "border-gray-300"} rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 text-xl transition-all transform duration-300 ease-in-out hover:scale-105`}
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className={`p-4 border ${darkMode ? "border-gray-600" : "border-gray-300"} rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 transition-all transform duration-300 ease-in-out hover:scale-105`}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className={`p-4 border ${darkMode ? "border-gray-600" : "border-gray-300"} rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 transition-all transform duration-300 ease-in-out hover:scale-105`}
          />
          <button
            onClick={editTodoId ? handleSaveEdit : addTodo}
            className={`p-4 ${darkMode ? "bg-blue-600" : "bg-blue-500"} text-white rounded-lg shadow-md hover:bg-blue-700 transition-all`}
          >
            {editTodoId ? "Save" : "Add"}
          </button>
        </div>

        {/* Search Bar */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search tasks"
          className={`mb-6 w-full p-4 border ${darkMode ? "border-gray-600" : "border-gray-300"} rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 text-xl`}
        />

        {/* Todo List */}
        <ul className="space-y-6">
          {filteredTodos.map((item) => (
            <li
              key={item._id}
              className={`flex justify-between items-center p-4 rounded-lg shadow-lg transition-all ${item.completed ? "bg-green-100" : "bg-gray-50"} hover:shadow-xl transform transition-transform duration-300 hover:scale-105`}
            >
              <span className={`text-xl ${item.completed ? "line-through text-gray-500" : "text-gray-800"}`}>
                {item.text}
                {item.dueDate && (
                  <span
                    className={`text-sm ml-3 ${new Date(item.dueDate) < new Date() ? "text-red-500" : "text-gray-500"}`}
                  >
                    Due: {item.dueDate}
                  </span>
                )}
              </span>
              <div className="flex space-x-4">
                <button
                  onClick={() => toggleComplete(item._id)}
                  className={`p-3 rounded-lg ${item.completed ? "bg-green-500" : "bg-gray-500"} text-white hover:bg-green-600 transition-all`}
                >
                  {item.completed ? "Undo" : "Complete"}
                </button>
                <button
                  onClick={() => removeTodo(item._id)}
                  className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-all"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEditTodo(item)}
                  className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all"
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Clear Completed Tasks Button */}
        <button
          onClick={clearCompleted}
          className="bg-red-500 text-white p-4 rounded-lg shadow-md hover:bg-red-600 transition-all"
        >
          Clear Completed Tasks
        </button>

        <div className="mt-8">
          <p className={`text-center ${darkMode ? "text-white" : "text-gray-700"} text-lg font-semibold`}>
            Progress: {completedTasks} / {todoList.length} tasks completed
          </p>
          <div className="flex justify-center items-center mt-8">
            <div className={`relative w-36 h-36 ${darkMode ? "text-blue-500" : "text-blue-600"} rounded-full flex justify-center items-center`}>
              <div className="absolute text-4xl font-semibold">{progressPercentage.toFixed(0)}%</div>
              <svg className="w-full h-full transform rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                <path className="text-gray-200" fill="none" strokeWidth="3" strokeLinecap="round" d="M18 2 a16 16 0 1 1 0 32 a16 16 0 1 1 0 -32" />
                <path className="text-blue-400" fill="none" strokeWidth="3" strokeLinecap="round" strokeDasharray={`${progressPercentage}, 100`} d="M18 2 a16 16 0 1 1 0 32 a16 16 0 1 1 0 -32" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      password,
      email,
      name,
    };

    try {
      const response = await axios.post("http://localhost:5000/register", data);
      console.log(response.status);
      if (response.status === 200) {
        navigate("/todo");
      } else {
        navigate("/Form1");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 via-purple-500 to-orange-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg border-2 border-gray-300">
        <h2 className="text-4xl font-semibold text-center text-gray-900 mb-6 tracking-wide"><b><i>Create an Account</i></b></h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <div className="form-group">
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="appearance-none rounded-lg border border-gray-300 px-4 py-3 mt-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all text-lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="appearance-none rounded-lg border border-gray-300 px-4 py-3 mt-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all text-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                className="appearance-none rounded-lg border border-gray-300 px-4 py-3 mt-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all text-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 transform hover:scale-105"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

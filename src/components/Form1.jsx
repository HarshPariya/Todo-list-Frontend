import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Form(){
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
    }
    
    try {
      const response = await axios.post("http://localhost:5000/register", data);
      console.log(response.status);
      if (response.status === 200) {
        navigate("/todo");
      } else {
        navigate("/Form1");
      }
    } catch (err) {}
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label >Name</label>
          <input
            type="name"
            className="border-solid border-2 border-red-600	"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="border-solid border-2 border-red-600	"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label >Password</label>
          <input
            type="password"
            className="border-solid border-2 border-red-600	"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>

        <button type="submit" className="bg-blue-500 ">
          Submit
        </button>
      </form>
    </div>
  );
};
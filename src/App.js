import React from "react";
import Header from "./components/Header";
// import { useState } from 'react';
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  // const[count,setCount] = useState(0)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/" element={<Footer />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

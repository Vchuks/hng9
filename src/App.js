import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";

function App() {
  return (
    <Routes>
      <Route path="/hng9" element={<Home />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default App;

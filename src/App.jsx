// File: App.jsx located in root-directory
import React from "react";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Login from "./component/Login";
import Register from "./component/Register";
import Diary from "./component/Diary";
import Footer from "./component/Footer";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />

      {/* Navigational Components */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register-user" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/diary" element={<Diary />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

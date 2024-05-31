// File: Navbar.jsx located in root-directory/src/component/
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      {/* Navbar Container */}
      <nav className="bg-black p-4">
        <Link to="/" className="px-3 hover:text-red-500 text-white">
          Home
        </Link>
        <Link to="/diary" className="px-3 hover:text-red-500 text-white">
          Diary
        </Link>
        <Link to="/register-user" className="px-3 hover:text-red-500 text-white">
          Register
        </Link>
        <Link to="/login" className="px-3 hover:text-red-500 text-white">
          Login
        </Link>
        <a href="/logout" className="px-3 hover:text-red-500 text-white">
          Logout
        </a>
      </nav>
    </div>
  );
}

export default Navbar;

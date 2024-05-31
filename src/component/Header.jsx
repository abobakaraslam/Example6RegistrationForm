// File: Header.jsx located in root-directory/src/component/
import React from "react";

function Header() {
  return (
    <div>
      {/* container 1: header */}
      <div className="text-center m-6">
        <h1>Diary Book</h1>
        <p>
          You can create your own diary notes in our application. You can either
          create, delete, update diary items.
        </p>
      </div>
    </div>
  );
}

export default Header;

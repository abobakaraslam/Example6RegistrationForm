// File: Home.jsx located in root-directory/src/component/
import React from "react";

function Home() {
  return (
    <div>
      {/* Home Page Container */}
      <div className="text-center bg-gray-300 p-52">
        <h2 className="text-3xl font-bold dark:text-white">
          Welcome to Diary Book
        </h2>
        <p className="m-4">
          You can create your own diary notes in our application. You can either
          create, delete, update diary items.
        </p>
        <div className="m-6">
          <button className="text-white bg-black hover:bg-slate-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            View Our More Services
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

// File: Diary.jsx located in root-directory/src/component/
import React from "react";

function Diary() {
  return (
    <div>
      {/* Diary Page Container */}
      <div className="p-5">
        <div className="text-center m-10">
          <h2 className="text-3xl font-bold dark:text-white">Diary Items</h2>
        </div>
        <div>
          <section className="">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:m-2 lg:py-0">
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <form action="#" className="space-y-4 md:space-y-6">
                    <div>
                      <label
                        htmlFor="itemTitle"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Item Title
                      </label>
                      <input
                        name="itemTitle"
                        id="itemTitle"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Assignment Due"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="description"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Description
                      </label>
                      <textarea
                        name="description"
                        id="description"
                        placeholder="Description about the diary item"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Create Diary Item
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="flex justify-center">
          {/* Item 1 */}
          <div className="items-center max-w-sm p-6 m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Item 1
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Description about item
            </p>
            <button className="bg-blue-700 hover:bg-blue-800 text-white ">
              Edit
            </button>
            <button className="bg-red-700 hover:bg-red-800 text-white ml-2">
              Delete
            </button>
          </div>
          {/* Item 2 */}
          <div className="items-center max-w-sm p-6 m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Item 2
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Description about item
            </p>
            <button className="bg-blue-700 hover:bg-blue-800 text-white ">
              Edit
            </button>
            <button className="bg-red-700 hover:bg-red-800 text-white ml-2">
              Delete
            </button>
          </div>
          {/* Item 3 */}
          <div className="items-center max-w-sm p-6 m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Item 3
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Description about item
            </p>
            <button className="bg-blue-700 hover:bg-blue-800 text-white ">
              Edit
            </button>
            <button className="bg-red-700 hover:bg-red-800 text-white ml-2">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Diary;

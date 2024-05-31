// File: Register.jsx located in root-directory/src/component/

import React from "react";
import { useState } from "react";

function Register() {
  //initialize states for all input fields
  const [allInputData, setInputData] = useState({
    name: "",
    fname: "",
    email: "",
    password: "",
    cpassword: "",
    status: "",
  });
  const onChangeInput = (event) => {
    //name of variable "event" can be changed
    setInputData({ ...allInputData, [event.target.name]: event.target.value });
  };

  const onSubmitHandle = (event) => {
    event.preventDefault(); //prevent page loading when click on button
    console.log("Value of name: ", allInputData.name);
    console.log("Value of Father Name: ", allInputData.fname);
    console.log("Value of Email: ", allInputData.email);
    console.log("Value of Password: ", allInputData.password);
    console.log("Value of Confirm Password: ", allInputData.cpassword);
    console.log("Value of Status: ", allInputData.status);

    //setting all input fields blank
    setInputData({
      name: "",
      fname: "",
      email: "",
      password: "",
      cpassword: "",
      status: "",
    });
  };

  return (
    <div>
      {/* Registration Page Container */}
      <div className="p-5">
        <div className="text-center m-10">
          <h2 className="text-3xl font-bold dark:text-white">Registration</h2>
        </div>
        <div className="text-center">
          <p>Register yourself to use our services.</p>
        </div>
        <div>
          <section className="">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:m-2 lg:py-0">
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <form action="#" className="space-y-4 md:space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Full Name
                      </label>
                      <input
                        name="name"
                        id="name"
                        required=""
                        value={allInputData.name}
                        onChange={onChangeInput}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="M Abo Bakar Aslam"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="fname"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Father Name
                      </label>
                      <input
                        name="fname"
                        id="fname"
                        required=""
                        value={allInputData.fname}
                        onChange={onChangeInput}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="M Aslam"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required=""
                        value={allInputData.email}
                        onChange={onChangeInput}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        required=""
                        value={allInputData.password}
                        onChange={onChangeInput}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="confirm-password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Confirm password
                      </label>
                      <input
                        type="password"
                        name="cpassword"
                        id="cpassword"
                        placeholder="••••••••"
                        required=""
                        value={allInputData.cpassword}
                        onChange={onChangeInput}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="status"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Status
                      </label>
                      <input
                        name="status"
                        id="status"
                        required=""
                        value={allInputData.status}
                        onChange={onChangeInput}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Teacher/Student"
                      />
                    </div>

                    <button
                      type="submit"
                      onClick={onSubmitHandle}
                      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Create an Account
                    </button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account?
                      <a
                        href="#"
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Login here
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Register;

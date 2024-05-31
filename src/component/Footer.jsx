// File: Header.jsx located in root-directory/src/component/
import React from "react";

function Footer() {
  return (
    <div>
      {/* container 6: Footer */}

      <footer className="bg-black shadow p-4 mt-8 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a
              href="https://coursecs.wordpress.com/"
              className="hover:text-red-700 text-white"
            >
              courseCS.wordpress.com™
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a
                href="#"
                className="hover:text-red-700 me-4 md:me-6 text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-red-700 me-4 md:me-6 text-white"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-red-700 me-4 md:me-6 text-white"
              >
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-700 text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

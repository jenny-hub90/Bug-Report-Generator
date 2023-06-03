import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <style>
        {`
        html, body {
          height: 100%;
          margin: 0;
          padding: 0;
          background:linear-gradient(45deg, white 0 50%, #0284C7 50% 100%);
          overflow:hidden;
        }
        .image{
          width:50%;
          height:auto;
          border-radius: 10px 50px 10px;
          box-shadow: 5px 10px rgb(2,132,199);
          margin: 50px 50px 50px 50px;
        }
        .logo {
          margin-right: 60rem;
        }
        footer {
          position: fixed;
          left: 0;
          bottom: 0;
          width: 100%;
          text-align: center;
          font-weight: 600;
          background-color: white;
       }
        `}
      </style>
      <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" class="flex items-center">
            <img
              src="./images/bug.png"
              class="h-8 mr-3"
              alt="Bug Generator Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              BugGenerator
            </span>
          </Link>
          <div class="flex md:order-2">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  class="block py-2 pl-3 pr-4 text-white bg-sky-400 rounded md:bg-transparent md:text-sky-400 md:p-0 md:dark:text-sky-400 dark:bg-sky-400 md:dark:bg-transparent"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-400 md:p-0 dark:text-white md:dark:hover:text-sky-400 dark:hover:bg-sky-400 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-400 md:p-0 dark:text-white md:dark:hover:text-sky-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="flex">
        <div class="flex-none w-1/2">
          <img
            src="./images/h2.png"
            alt="picture"
            class="w-1/2 h-auto p-2"
            className="image"
          />
          <h3 className="text-black text-2xl p-6 font-medium font-Roboto text-center">
            What is bug report?
          </h3>
          <p className="text-black text-xl p-2 font-light font-Roboto text-center">
            Bug reporting is an effective way to let software developers know
            about issues with their software.Bug reporting can help software
            developers fix the bug and make the software more reliable.
            <br />
          </p>
        </div>
        <div class="flex-initial w-1/2">
          <h1 className="text-white text-3xl p-6 font-extrabold font-Roboto">
            Bug Report Generator
          </h1>
          <h2 className="text-white text-3xl p-2 font-semibold font-Roboto">
            Don't fix bugs later; fix them now.
          </h2>
          <div class="flex justify-center">
            <button class="bg-white text-sky-600 shadow-lg shadow-sky-400/40 ... p-2 rounded-full hover:bg-sky-400 hover:text-white m-10">
              <Link to="/BugForm">Bug Generator</Link>
            </button>
          </div>
        </div>
      </div>
      <footer>&copy;copyright@2023 belongs to the author themselves </footer>
    </div>
  );
};

export default Home;

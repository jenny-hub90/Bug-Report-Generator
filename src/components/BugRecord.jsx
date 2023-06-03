import React from "react";
import { Link } from "react-router-dom";

const BugRecord = () => {
  return (
    <div>
      <style>
        {`
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
      background:linear-gradient(45deg, white 0 50%, #0284C7 50% 100%);
    }
    .image{
      width:50%;
      height:auto;
      border-radius: 10px 50px 10px;
      box-shadow: 5px 10px rgb(2,132,199);
      margin: auto;
    }
    .logo {
      margin-right: 60rem;
    }
    .Break{
      display:flex;
      flex-direction: column;
    }
    footer {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      background-color: white;
      text-align: center;
      font-weight: 600;
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
      <div class="bg-white shadow-2xl w-1/2 m-auto p-2">
        <div class="flex flex-col ...">
          <div class="flex m-10">
            <div>
              <h3 class="text-sky-600 font-bold ">BugTitle : </h3>
            </div>
            <div>
              <p class="pl-2"> Lorem Ipsum </p>
            </div>
          </div>
          <div class="flex m-10">
            <div>
              <h3 class="text-sky-600 font-bold">IssueDescription: </h3>
            </div>
            <div>
              <p class="pl-2">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.{" "}
              </p>
            </div>
          </div>
          <div class="flex m-10">
            <div>
              <h3 class="text-sky-600 font-bold">OperatingSystem : </h3>
            </div>
            <div>
              <p class="pl-2"> Windows 11 </p>
            </div>
          </div>
          <div class="flex m-10">
            <div>
              <h3 class="text-sky-600 font-bold">Browser: </h3>
            </div>
            <div>
              <p class="pl-2"> Mozilla Firefox </p>
            </div>
          </div>
          <div class="flex m-10">
            <div>
              <h3 class="text-sky-600 font-bold">Priority : </h3>
            </div>
            <div>
              <p class="pl-2"> High </p>
            </div>
          </div>
          <div class="flex m-10">
            <div>
              <h3 class="text-sky-600 font-bold">Screenshoot1:</h3>
            </div>
            <div>
              <img class="pl-2 w-3/4 h-auto m-auto" src="./images/bug.png" />
            </div>
          </div>
          <div class="flex m-10">
            <div>
              <h3 class="text-sky-600 font-bold">Screenshoot2:</h3>
            </div>
            <div>
              <img class="pl-2 w-3/4 h-auto m-auto" src="./images/bug.png" />
            </div>
          </div>
          <div class="flex m-10">
            <div>
              <h3 class="text-sky-600 font-bold">BugStatus:</h3>
            </div>
            <div>
              <p class="pl-2">In Queue</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button>Back</button>
      </div>
      <footer>&copy;copyright@2023 belongs to the author themselves </footer>
    </div>
  );
};

export default BugRecord;

import React from 'react'
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
      background:linear-gradient(45deg, white 0 50%, #0284C7 50% 100%);
      text-align: center;
      font-weight: 600;
   }
    `}
  </style>
    
    <nav className="flex justify-between items-center sm:justify-center space-x-4 p-3">
    <div className="logo">
      <img src="./images/bug.png" alt="Logo" className="w-40 h-auto p-2" />
    </div>
      <div className="flex space-x-8">
        {[
            ['Home', '/'],
            ['Login', '/Login'],
            ['Register', '/Register'],
        ].map(([title, url]) => (
        <Link to={url} className="text-white rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-sky-400 hover:text-white">{title}</Link>
         ))}
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
                <p class="pl-2"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
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
                <img class="pl-2 w-3/4 h-auto m-auto" src="./images/bug.png"/>
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
  )
}

export default BugRecord
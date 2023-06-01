import React from 'react'
import { Link } from "react-router-dom";

const AllBugs = () => {
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
        <h1 class="font-extrabold text-center text-3xl text-white p-2">All Bugs</h1>
        <table class="border border-black w-11/12 m-auto">
            <thead class="border-b font-medium border-black">
            <tr>
            <th scope="col"
                class="border-r px-6 py-4 border-black">Bug Title</th>
            <th scope="col"
                class="border-r px-6 py-4 border-black">Issue Description</th>
            <th scope="col"
                class="border-r px-6 py-4 border-black">Operating System</th>
            <th scope="col"
                class="border-r px-6 py-4 border-black">Browser</th>
            <th scope="col"
                class="border-r px-6 py-4 border-black">Priority</th>
            <th scope="col"
                class="border-r px-6 py-4 border-black">Image 1</th>
            <th scope="col"
                class="border-r px-6 py-4 border-black">Image 2</th>
            <th scope="col"
                class="border-r px-6 py-4 border-black">Bug Status</th>
            </tr>
            </thead>
            <tr class="border-b font-medium border-black">
                <td scope="col"
                class="border-r px-6 py-4 border-black">Bug 1</td>
                <td scope="col"
                class="border-r px-6 py-4 border-black">Hi i am bug 1</td>
                <td scope="col"
                class="border-r px-6 py-4 border-black">Winodws 11</td>
                <td scope="col"
                class="border-r px-6 py-4 border-black">Brave</td>
                <td scope="col"
                class="border-r px-6 py-4 border-black">High</td>
                <td scope="col"
                class="border-r px-6 py-4 border-black"><img src="./images/bug.png" alt="" class="w-3/4 h-auto m-auto border-2 border-black"/></td>
                <td scope="col"
                class="border-r px-6 py-4 border-black"><img src="./images/bug.png" alt="" class="w-3/4 h-auto m-auto border-2 border-black"/></td>
                <td scope="col"
                class="border-r px-6 py-4 border-black">In queue</td>
            </tr>
            <tr class="border-b font-medium border-black">
                <td scope="col"
                class="border-r px-6 py-4 border-black">Bug 1</td>
                <td scope="col"
                class="border-r px-6 py-4 border-black">Hi i am bug 1</td>
                <td scope="col"
                class="border-r px-6 py-4 border-black">Winodws 11</td>
                <td scope="col"
                class="border-r px-6 py-4 border-black">Brave</td>
                <td scope="col"
                class="border-r px-6 py-4 border-black">High</td>
                <td scope="col"
                class="border-r px-6 py-4 border-black"><img src="./images/bug.png" alt="" class="w-3/4 h-auto m-auto border-2 border-black"/></td>
                <td scope="col"
                class="border-r px-6 py-4 border-black"><img src="./images/bug.png" alt="" class="w-3/4 h-auto m-auto border-2 border-black"/></td>
                <td scope="col"
                class="border-r px-6 py-4 border-black">In queue</td>
            </tr>
            <tr class="border-b font-medium border-black">
                <td scope="col"
                class="border-r px-6 py-4 border-black">Bug 1</td>
                <td scope="col"
                class="border-r px-6 py-4 border-black">Hi i am bug 1</td>
                <td scope="col"
                class="border-r px-6 py-4 border-black">Winodws 11</td>
                <td scope="col"
                class="border-r px-6 py-4 border-black">Brave</td>
                <td scope="col"
                class="border-r px-6 py-4 border-black">High</td>
                <td scope="col"
                class="border-r px-6 py-4 border-black"><img src="./images/bug.png" alt="" class="w-3/4 h-auto m-auto border-2 border-black"/></td>
                <td scope="col"
                class="border-r px-6 py-4 border-black"><img src="./images/bug.png" alt="" class="w-3/4 h-auto m-auto border-2 border-black"/></td>
                <td scope="col"
                class="border-r px-6 py-4 border-black">In queue</td>
            </tr>
            <tr class="border-b font-medium border-black">
                <td scope="col"
                class="border-r px-6 py-4 border-black">Bug 1</td>
                <td scope="col"
                class="border-r px-6 py-4 border-black">Hi i am bug 1</td>
                <td scope="col"
                class="border-r px-6 py-4 border-black">Winodws 11</td>
                <td scope="col"
                class="border-r px-6 py-4 border-black">Brave</td>
                <td scope="col"
                class="border-r px-6 py-4 border-black">High</td>
                <td scope="col"
                class="border-r px-6 py-4 border-black"><img src="./images/bug.png" alt="" class="w-3/4 h-auto m-auto border-2 border-black"/></td>
                <td scope="col"
                class="border-r px-6 py-4 border-black"><img src="./images/bug.png" alt="" class="w-3/4 h-auto m-auto border-2 border-black"/></td>
                <td scope="col"
                class="border-r px-6 py-4 border-black">In queue</td>
            </tr>
        </table>
        <footer>&copy;copyright@2023 belongs to the author themselves </footer>
    </div>
  )
}

export default AllBugs
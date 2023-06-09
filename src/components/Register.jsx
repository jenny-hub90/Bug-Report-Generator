import React from 'react';
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div class="flex items-center justify-center h-screen">
    <div class="font-Roboto bg-white rounded-lg shadow-lg p-8 w-6/12">
        <h1 class="text-center text-3xl font-bold mb-4 text-sky-600">Register</h1>
        <form class="max-w-sm mx-auto">
            <label class="block">
            <span class="block text-xl font-medium text-slate-700"> Username </span>
            <input type="text" value="username" disabled class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-sky-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>
            </label>
            <label class="block">
            <span class="block text-xl font-medium text-slate-700"> Email </span>
            <input type="text" value="email" disabled class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>
            </label>
            <label class="block">
            <span class="block text-xl font-medium text-slate-700"> Password </span>
            <input type="text" value="password" disabled class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>
            </label>
            <label class="block">
            <span class="block text-xl font-medium text-slate-700"> Re-enter Password </span>
            <input type="text" value="re-enter password" disabled class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>
            </label>
            <p className="text-center p-2">Already have an account? <Link to="/Login" className="font-bold mb-4 text-sky-600">Login</Link></p>
            <div class="flex justify-center p-2">
                <button class="bg-sky-600 hover:bg-sky-400 text-sm rounded-md p-2 text-white font-bold">Submit</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Register;
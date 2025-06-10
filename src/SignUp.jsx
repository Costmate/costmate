import React from "react";
import costmatelogo from './assets/costmate-logo.png'

export default function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md relative">
        {/* Success message */}
        {/* <div className="absolute top-4 right-4 text-sm text-green-700 bg-green-100 px-3 py-1 rounded-full">
          ● Profile Created Successfully
        </div> */}

        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={costmatelogo} // Replace with your logo path
            alt="CostMate Logo"
            className="h-12 mb-2"
          />
          <h1 className="text-2xl font-bold text-center">Welcome</h1>
          <p className="text-sm text-gray-500 text-center">
            Let’s Setup Your Profile
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              placeholder="Enter phone number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <span className="absolute right-3 top-2.5 cursor-pointer text-gray-400">
                👁️
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-1">Min of 6 characters</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <span className="absolute right-3 top-2.5 cursor-pointer text-gray-400">
                👁️
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-900 text-white py-2 rounded-md hover:bg-purple-800 transition"
          >
            Sign Up
          </button>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t"></div>
            <span className="mx-2 text-sm text-gray-400">Or</span>
            <div className="flex-grow border-t"></div>
          </div>

          <button
            type="button"
            className="w-full border border-purple-800 py-2 rounded-md flex items-center justify-center gap-2 text-sm text-purple-900"
          >
            {/* <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Google_Logo.png"
              alt="Google Logo"
              className="w-5 h-5"
            /> */}
            Sign Up With Google
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Do you have an account?
            <a href="#" className="ml-1 font-semibold text-purple-900">
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

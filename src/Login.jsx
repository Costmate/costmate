import React from 'react'
import costmatelogo from './assets/costmate-logo.png'

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <img
            src={costmatelogo} // Replace with your logo path
            alt="CostMate Logo"
            className="h-12 mb-2"
          />
          <h1 className="text-2xl font-bold text-center">Welcome Back</h1>
          <p className="text-sm text-gray-500 text-center">
            Please enter your details to sign in
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
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
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-purple-700" />
              Remember me
            </label>
            <a href="#" className="text-purple-700 font-medium">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#550948] text-white py-2 rounded-md hover:bg-purple-800 transition"
          >
            Sign In
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
            Sign In With Google
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t you have an account?
            <a href="#" className="ml-1 font-semibold text-purple-900">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login

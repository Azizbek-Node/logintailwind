import React, { useState } from "react";
import Modal from "./Modal";

function Signup_Signin() {
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);

  return (
    <div className="header flex justify-end gap-4 items-center p-4 bg-blue-600 shadow-md">
      <button
        className="bg-white px-6 py-2 rounded-full text-sm font-bold text-blue-600 hover:bg-gray-100 transition duration-300"
        onClick={() => {
          setOpenSignUp(true);
          setOpenSignIn(false);
        }}
      >
        Sign up
      </button>
      <button
        className="bg-white px-6 py-2 rounded-full text-sm font-bold text-blue-600 hover:bg-gray-100 transition duration-300"
        onClick={() => {
          setOpenSignUp(false);
          setOpenSignIn(true);
        }}
      >
        Sign in
      </button>
      {openSignUp && (
        <Modal close={() => setOpenSignUp(false)}>
          <div className="w-[400px] bg-white p-6 rounded-lg shadow-lg relative">
            <h1 className="text-2xl font-semibold text-center text-blue-600 mb-4">
              Create Your Account
            </h1>
            <div className="flex flex-col gap-4">
              <input
                className="border-2 border-gray-300 rounded-lg p-2 focus:outline-blue-500"
                type="text"
                placeholder="Name"
              />
              <input
                className="border-2 border-gray-300 rounded-lg p-2 focus:outline-blue-500"
                type="text"
                placeholder="Email"
              />
              <input
                className="border-2 border-gray-300 rounded-lg p-2 focus:outline-blue-500"
                type="password"
                placeholder="Password"
              />
              <input
                className="border-2 border-gray-300 rounded-lg p-2 focus:outline-blue-500"
                type="password"
                placeholder="Confirm Password"
              />
              <input
                className="border-2 border-gray-300 rounded-lg p-2 focus:outline-blue-500"
                type="text"
                placeholder="Username"
              />
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <span
                  className="text-blue-600 font-bold cursor-pointer"
                  onClick={() => {
                    setOpenSignUp(false);
                    setOpenSignIn(true);
                  }}
                >
                  Sign in
                </span>
              </p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-500 transition duration-300">
                Create Account
              </button>
              <button
                className="w-full bg-gray-500 text-white py-2 rounded-lg font-bold hover:bg-gray-400 transition duration-300"
                onClick={() => setOpenSignUp(false)}
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}

      {openSignIn && (
        <Modal close={() => setOpenSignIn(false)}>
          <div className="w-[400px] bg-white p-6 rounded-lg shadow-lg relative">
            <h1 className="text-2xl font-semibold text-center text-blue-600 mb-4">
              Login to Your Account
            </h1>
            <div className="flex flex-col gap-4">
              <input
                className="border-2 border-gray-300 rounded-lg p-2 focus:outline-blue-500"
                type="text"
                placeholder="Email"
              />
              <input
                className="border-2 border-gray-300 rounded-lg p-2 focus:outline-blue-500"
                type="password"
                placeholder="Password"
              />
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <span
                  className="text-blue-600 font-bold cursor-pointer"
                  onClick={() => {
                    setOpenSignUp(true);
                    setOpenSignIn(false);
                  }}
                >
                  Sign up
                </span>
              </p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-500 transition duration-300">
                Login
              </button>
              <button
                className="w-full bg-gray-500 text-white py-2 rounded-lg font-bold hover:bg-gray-400 transition duration-300"
                onClick={() => setOpenSignIn(false)}
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Signup_Signin;

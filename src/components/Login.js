import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState("true");

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className=" ">
      <Header />
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg"
        />
      </div>
      <form className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Phone Number"
            className="p-3 my-3 w-full bg-gray-700 rounded"
          />
        )}
        {isSignInForm ? (
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="p-3 my-3 w-full bg-gray-700 rounded"
          />
        ) : (
          <input
            type="text"
            placeholder="Email Adress"
            className="p-3 my-3 w-full bg-gray-700 rounded"
          />
        )}
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-3 w-full bg-gray-700 rounded"
        />
        <p className="text-red-500 font-bold text-lg py-2"></p>
        <button className="p-3 my-4 w-full bg-red-700 rounded-md ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex space-x-36 text-xs text-gray-400 leading-3 ">
          <p>Remember me</p>
          <p>Need Help?</p>
        </div>

        <p className="py-4 mt-8 text-sm">
          {isSignInForm ? (
            <span className="flex">
              <p className="text-gray-400">New to Netflix?</p>{" "}
              <p
                className="ml-2 cursor-pointer font-bold"
                onClick={toggleSignInForm}
              >
                Sign Up Now
              </p>
            </span>
          ) : (
            <span className="flex">
              <p className="text-gray-400">Already registered?</p>
              <p
                className="ml-2 cursor-pointer font-bold"
                onClick={toggleSignInForm}
              >
                Sign In Now.
              </p>
            </span>
          )}
        </p>
        <p className="text-xs text-gray-400">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </p>
      </form>
    </div>
  );
};

export default Login;

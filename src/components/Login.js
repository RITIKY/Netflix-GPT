import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser} from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constant";


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    if (!isSignInForm) {
      const message = checkValidData(
        name.current.value,
        email.current.value,
        password.current.value
      );
      setErrorMessage(message);
    } else {
      const message = checkValidData(
        email.current.value,
        password.current.value
      );
      setErrorMessage();
    }

    // if (message) return;

    if (!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Enter Your Name"
            className="p-3 my-3 w-full bg-gray-700 rounded"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email or Phone Number"
          className="p-3 my-3 w-full bg-gray-700 rounded"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-3 w-full bg-gray-700 rounded"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-3 my-4 w-full bg-red-700 rounded-md "
          onClick={handleButtonClick}
        >
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

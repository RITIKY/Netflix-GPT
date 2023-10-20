import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { USER_AVATAR, LOGO } from "../utils/constant";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-32 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-36"
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          <img
            className="w-10 h-10 m-2"
            alt="usericon"
            src={USER_AVATAR}
            // src={user?.photoURL}
          />
          <button onClick={handleSignOut} className="font-bold text-white">
            Sign Out
          </button> 
        </div>
      )}
    </div>
  );
};

export default Header;

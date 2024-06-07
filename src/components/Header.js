import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../utilities/firebase";
import { addUser, removeUser } from "../utilities/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LOGO, USER_PHOTO } from "../utilities/constants";
import { addGpt } from "../utilities/GPTSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [gptButton, setgptButton] = useState(false);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  const handleGptSearch = () => {
    setgptButton(!gptButton);
    dispatch(addGpt());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute bg-gradient-to-b from-black w-screen flex justify-between z-50">
      <Link to="/browse">
        <img className="w-28 md:w-48 md:ml-5 pl-4 py-3" src={LOGO} alt="logo" />
      </Link>
      {user && (
        <div className="flex ">
          <button
            className="my-8 mr-8 font-semibold cursor-pointer float-right text-white bg-red-700 px-3 rounded-lg"
            onClick={handleGptSearch}
          >
            {gptButton ? "Home" : "GPT Search"}
          </button>
          <button
            className="my-8 mr-8 font-semibold cursor-pointer float-right text-white hover:text-yellow-300"
            onClick={handleSignOut}
          >
            (Sign Out)
          </button>
          <img
            className="hidden md:inline-block p-8 w-28 rounded-lg mr-4"
            src={USER_PHOTO}
            alt="signout"
          />
        </div>
      )}
    </div>
  );
};

export default Header;

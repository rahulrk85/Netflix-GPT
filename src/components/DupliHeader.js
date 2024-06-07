import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LOGO, USER_PHOTO } from "../utilities/constants";

const DupliHeader = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/");
  };

  return (
    <div className="absolute bg-gradient-to-b from-black w-screen flex justify-between z-50">
      <Link to="/browse">
        <img className="w-28 md:w-48 md:ml-5 pl-4 py-3" src={LOGO} alt="logo" />
      </Link>
      {user && (
        <div className="flex ">
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

export default DupliHeader;

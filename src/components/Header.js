import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Log In");

  const cardItems = useSelector((store) => store.cart.items);

  const handleBtn = () => {
    loginBtn === "Log In" ? setLoginBtn("Log Out") : setLoginBtn("Log In");
  };

  const { loggedInUser } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between shadow-md my-4">
      <div className="logo-container">
        <img
          className="w-36 m-2 cursor-pointer"
          src={LOGO_URL}
          alt="restaurant-logo"
        />
      </div>
      <div className="flex ">
        <ul className="flex p-4 m-4 items-center  ">
          <li className="px-4 mx-7 text-lg font-bold">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4  text-lg font-medium hover:text-orange-500">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4  text-lg font-medium hover:text-orange-500">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 text-lg font-medium hover:text-orange-500">
            <Link to="/contact"> Contact Us</Link>
          </li>
          <li className="px-4 text-lg font-medium hover:text-orange-500">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="cursor-pointer px-4 text-lg font-medium hover:text-orange-500">
            <Link to="/cart">Cart ({cardItems.length})</Link>
          </li>
          <li className="px-4 text-lg font-medium ">
            <button
              className="bg-orange-400 px-4 py-2 hover:bg-orange-300 rounded-xl"
              onClick={handleBtn}
            >
              {loginBtn}
            </button>
          </li>
          <li className="cursor-pointer px-4 text-lg font-medium hover:text-orange-500">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

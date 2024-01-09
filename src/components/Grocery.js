import React from "react";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Grocery = () => {
  const { loggedInUser, password } = useContext(UserContext);

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-xl font-medium mb-10">
        This is our grocery store with all the children grocery components
      </h1>
      <p className="text-xl font-medium mb-6">
        {loggedInUser} : {password}
      </p>
      <p className="text-xl font-medium mb-8">This page under contruction</p>

      <button className="bg-orange-400 font-medium hover:bg-orange-300 px-4 py-2 rounded-lg">
        Go To Restaurant
      </button>
    </div>
  );
};

export default Grocery;

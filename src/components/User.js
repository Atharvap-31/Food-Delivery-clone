import React from "react";
import { useEffect } from "react";

const User = ({ name }) => {
  useEffect(() => {
    const timer = setInterval(() => {}, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="user-card">
      <h2>Name :{name}</h2>
      <h3>Location: Nagpur, Maharashtra</h3>
      <h4>Contact: atharva@gmail.com</h4>
    </div>
  );
};

export default User;

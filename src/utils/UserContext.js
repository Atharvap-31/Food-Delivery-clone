import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default User",
  password: 12345,
});

export default UserContext;

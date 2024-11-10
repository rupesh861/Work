import React, { createContext, useContext } from "react";
import { AuthContext } from "./AuthProvider";

function Logout() {
  const { logout } = useContext(AuthContext);

  return <button onClick={logout}>Logout</button>;
}

export default Logout;
 
import React, { createContext } from "react";

const AuthConstext = createContext(null);

const AuthProvide = () => {
  const authInfo = {
    name: "jarin",
  };
  return <AuthConstext.Provider value={authInfo}></AuthConstext.Provider>;
};

export default AuthProvide;

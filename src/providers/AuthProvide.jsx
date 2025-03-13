import React, { createContext } from "react";

const AuthConstext = createContext(null);

const AuthProvide = ({ children }) => {
  const authInfo = {
    name: "jarin",
  };
  return (
    <AuthConstext.Provider value={authInfo}>{children}</AuthConstext.Provider>
  );
};

export default AuthProvide;

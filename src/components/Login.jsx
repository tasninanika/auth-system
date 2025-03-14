import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const { signInUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="hero flex flex-col justify-center mt-20">
      <h2 className="text-4xl font-semibold mb-10">Login</h2>
      <div className="card bg-base-100 w-96 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              <label className="fieldset-label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="fieldset-label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <div className="flex justify-between">
                <a className="link link-hover">Forgot password?</a>
                <NavLink to="register" className="pr-4">
                  Create an account
                </NavLink>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
              <button className="btn">Login with Google</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

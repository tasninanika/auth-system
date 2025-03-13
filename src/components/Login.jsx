import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
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
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

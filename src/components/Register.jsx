import React from "react";

const Register = () => {
  return (
    <div className="hero flex flex-col justify-center mt-20">
      <h2 className="text-4xl font-semibold mb-10">Register Now!</h2>
      <div className="card bg-base-100 w-96 shadow-2xl">
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="fieldset-label">Name</label>
            <input type="text" className="input" placeholder="Name" />
            <label className="fieldset-label">Photo URL</label>
            <input type="text" className="input" placeholder="URL" />
            <label className="fieldset-label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="fieldset-label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <label className="fieldset-label mt-2">
              <input type="checkbox" defaultChecked className="checkbox" />
              Accepts Our Terms & Conditions
            </label>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;

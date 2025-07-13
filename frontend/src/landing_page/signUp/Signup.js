import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <>
      <div className="addUser">
        <h3>Sign Up</h3>
        <form className="addUserForm">
          <div className="inputGroup">
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              id="name"
              autoComplete="off"
              placeholder="Enter your Name"
            />

            <label htmlFor="email">Email :</label>
            <input
              type="text"
              id="email"
              autoComplete="off"
              placeholder="Enter your Email"
            />

            <label htmlFor="password">Password :</label>
            <input
              type="password"
              id="password"
              autoComplete="off"
              placeholder="Enter password"
            />
            <button type="submit" class="btn btn-info mt-3">
              Sign Up
            </button>
          </div>
        </form>
        <div className="login">
          <p className="mt-3">
            Already have an account ?{" "}
            <Link to="/login" type="button" class="btn btn-link">
              LogIn
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

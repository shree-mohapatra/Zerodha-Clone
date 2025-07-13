import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <>
      <div className="addUser">
        <h3>Login</h3>
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
              Login
            </button>
          </div>
        </form>
        <div className="login">
          <p className="mt-3">
            Don't have any account ?{" "}
            <Link to="/signup" type="button" class="btn btn-link">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export function Login({ login }) {
  useEffect(function () {
    console.log("Login mount");

    return function () {
      console.log("Login unmount");
    };
  }, []);

  return (
    <div className="Login">
      <h1>Login</h1>
      <button onClick={login}>login</button>
      <p>
        IF you do not have an account <Link to="/signup">signup</Link>
      </p>
    </div>
  );
}

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export function Signup({ signup }) {
  useEffect(function () {
    console.log("Signup mount");

    return function () {
      console.log("Signup unmount");
    };
  }, []);

  return (
    <div className="signup">
      <h1>signup</h1>
      <button onClick={signup}>signup</button>
      <p>
        IF you have an account <Link to="/login">login</Link>
      </p>
    </div>
  );
}

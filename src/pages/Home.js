import React, { useEffect } from "react";

export function Home({ logout }) {
  useEffect(function () {
    console.log("Home mount");

    return function () {
      console.log("Home unmount");
    };
  }, []);

  return (
    <div className="Home">
      <h1>Home</h1>
      <button onClick={logout}>logout</button>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import "./App.css";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Home } from "./pages/Home";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(function () {
    console.log("App mount");

    return function () {
      console.log("App unmount");
    };
  }, []);

  function login() {
    setLoggedIn(true);
  }

  function logout() {
    setLoggedIn(false);
  }

  function signup() {
    setLoggedIn(true);
  }

  return (
    <Router>
      <Switch>
        <Route path="/login">
          {loggedIn ? <Redirect to="/" /> : <Login login={login} />}
        </Route>
        <Route path="/signup">
          {loggedIn ? <Redirect to="/" /> : <Signup signup={signup} />}
        </Route>
        <Route path="/">
          {loggedIn ? <Home logout={logout} /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

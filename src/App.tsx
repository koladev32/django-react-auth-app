import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Login, Profile } from "./pages";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

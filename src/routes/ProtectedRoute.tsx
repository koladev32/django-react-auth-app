import React from "react";
import { Redirect, Route, RouteProps } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const ProtectedRoute = (props: RouteProps) => {
  const auth = useSelector((state: RootState) => state.auth);

  if (auth.account) {
    if (props.path === "/login") {
      return <Redirect to={"/"} />;
    }
    return <Route {...props} />;
  } else if (!auth.account) {
    return <Redirect to={"/login"} />;
  } else {
    return <div>Not found</div>;
  }
};

export default ProtectedRoute;

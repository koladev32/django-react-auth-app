import React from "react";
import { Redirect, Route, RouteComponentProps } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const ProtectedRoute = (props: any) => {
  //TODO : fix
  const auth = useSelector((state: RootState) => state.auth);

  if (auth.account) {
    return <Route {...props} />;
  } else if (!auth.account) {
    return <Redirect to={"/login"} />;
  } else {
    return <div>Not found</div>;
  }
};

export default ProtectedRoute;

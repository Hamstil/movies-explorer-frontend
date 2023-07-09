import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, isLoggedIn, ...props }) {
  return (
    <Route>{isLoggedIn ? <Component {...props} /> : <Redirect to="/" />}</Route>
  );
}

export default ProtectedRoute;

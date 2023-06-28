import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUser } from "../features/Auth/AuthSlice";

const PrivateRoute = ({ children }) => {
  const user = useSelector(selectUser);

  if (!user) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return children;
};

export default PrivateRoute;

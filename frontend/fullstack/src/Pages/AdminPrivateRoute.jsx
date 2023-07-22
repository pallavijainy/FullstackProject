import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { LoginStatus } from "../features/Auth/AuthSlice";

const AdminPrivateRoute = ({ children }) => {
  const user = useSelector(LoginStatus);

  if (!user) {
    return <Navigate to={"/login"} replace={true} />;
  }

  if (user && user.role !== "admin") {
    return <Navigate to="/"></Navigate>;
  }

  return children;
};

export default AdminPrivateRoute;

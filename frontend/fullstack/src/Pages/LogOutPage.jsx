import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { LogOutAsync, selectUser } from "../features/Auth/AuthSlice";

const LogOutPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log(user);
  useEffect(() => {
    dispatch(LogOutAsync());
  });

  return <div>{!user && <Navigate to={"/login"}></Navigate>}</div>;
};

export default LogOutPage;

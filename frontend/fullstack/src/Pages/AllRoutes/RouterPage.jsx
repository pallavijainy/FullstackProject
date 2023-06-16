import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./../Home";
import LoginPage from "./../LoginPage";
import SignupPage from "./../SignupPage";

const RouterPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
    </Routes>
  );
};

export default RouterPage;

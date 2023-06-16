import React from "react";
import { Routes, Route } from "react-router-dom";
import CartPage from "../CartPage";
import Home from "./../Home";
import LoginPage from "./../LoginPage";
import SignupPage from "./../SignupPage";
import CheckOut from "./../CheckOut";

const RouterPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
      <Route path="/checkout" element={<CheckOut />}></Route>
    </Routes>
  );
};

export default RouterPage;

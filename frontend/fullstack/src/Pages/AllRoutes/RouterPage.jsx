import React from "react";
import { Routes, Route } from "react-router-dom";
import CartPage from "../CartPage";
import Home from "./../Home";
import LoginPage from "./../LoginPage";
import SignupPage from "./../SignupPage";
import CheckOut from "./../CheckOut";
import PayNow from "../PayNow";
import ProductDetailPage from "../ProductDetailPage";

const RouterPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
      <Route path="/checkout" element={<CheckOut />}></Route>
      <Route path="/pay" element={<PayNow />}></Route>
      <Route path="/productdetail/:id" element={<ProductDetailPage />}></Route>
    </Routes>
  );
};

export default RouterPage;

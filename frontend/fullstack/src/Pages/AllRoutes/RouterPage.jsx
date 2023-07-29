import React from "react";
import { Routes, Route } from "react-router-dom";
import CartPage from "../CartPage";
import Home from "./../Home";
import LoginPage from "./../LoginPage";
import SignupPage from "./../SignupPage";
import CheckOut from "./../CheckOut";
import PayNow from "../PayNow";
import ProductDetailPage from "../ProductDetailPage";
import PrivateRoute from "../PrivateRoute";
import PageNotFound from "../PageNotFound";
import OrderSuccess from "./OrderSuccess";
import UserOrdersPage from "../UserOrdersPage";
import MyProfilePage from "../MyProfilePage";

import LogOutPage from "../LogOutPage";
import ForgotPasswordPage from "../ForgotPasswordPage";
import AdminDashboard from "../AdminDashboard";
import AdminPrivateRoute from "../AdminPrivateRoute";
import AddNewProductPage from "./../AddNewProductPage";
const RouterPage = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/logout" element={<LogOutPage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route path="/addnewproduct" element={<AddNewProductPage />}></Route>
      <Route
        path="/admin"
        element={
          <AdminPrivateRoute>
            <AdminDashboard />
          </AdminPrivateRoute>
        }
      ></Route>
      <Route path="/forgot" element={<ForgotPasswordPage />}></Route>
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/checkout" element={<CheckOut />}></Route>
      <Route path="/pay" element={<PayNow />}></Route>
      <Route path="/myorder" element={<UserOrdersPage />}></Route>
      <Route path="/profile" element={<MyProfilePage />}></Route>
      <Route path="/productdetail/:id" element={<ProductDetailPage />}></Route>
      <Route path="/ordersuccess/:id" element={<OrderSuccess />}></Route>
      <Route path="/edit/:id" element={<AddNewProductPage />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
};

export default RouterPage;

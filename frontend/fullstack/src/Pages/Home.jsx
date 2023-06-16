import React from "react";
import Navbar from "../features/Navbar/Navbar";
import ProductList from "../features/ProductList/ProductList";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

const Home = () => {
  return (
    <div>
      <Navbar>
        <ProductList />
        <LoginPage />
        <SignupPage />
      </Navbar>
    </div>
  );
};

export default Home;

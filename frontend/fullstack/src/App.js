import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import { selectUser } from "./features/Auth/AuthSlice";

import { GetCartDatabyUserIdAsync } from "./features/cart/CartSlice";

import Navbar from "./features/Navbar/Navbar";
import { fetchLoggedInUserAsync } from "./features/userProfile/UserProfileSlice";

import RouterPage from "./Pages/AllRoutes/RouterPage";

function App() {
  const user = useSelector(selectUser);
  console.log(user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(GetCartDatabyUserIdAsync(user?.id));
      dispatch(fetchLoggedInUserAsync(user?.id));
    }
  }, [dispatch, user]);

  return (
    <div className="App">
      <Navbar>
        <RouterPage />
      </Navbar>
    </div>
  );
}

export default App;

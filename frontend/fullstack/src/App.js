import React from "react";

import "./App.css";
import Navbar from "./features/Navbar/Navbar";
import RouterPage from "./Pages/AllRoutes/RouterPage";

function App() {
  return (
    <div className="App">
      <Navbar>
        <RouterPage />
      </Navbar>
    </div>
  );
}

export default App;

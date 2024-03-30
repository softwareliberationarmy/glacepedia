import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { NavBar } from "./navigation/NavBar";

function App() {
  return (
    <main>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </main>
  );
}

export default App;

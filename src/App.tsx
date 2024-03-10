import { useState } from "react";
import logo from "./assets/logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <img src={logo} className="logo react" alt="Glacepedia logo" />
      </div>
      <h1>Glacepedia</h1>
      <div className="card"></div>
    </>
  );
}

export default App;

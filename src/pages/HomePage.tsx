import React from "react";
import logo from "../assets/logo.svg";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <img src={logo} className="logo react" alt="Glacepedia logo" />
      <h1>Welcome to Glacepedia</h1>
    </>
  );
}

export default HomePage;

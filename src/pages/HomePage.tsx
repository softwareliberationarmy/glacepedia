import React from "react";
import logo from "../assets/logo.svg";
import "./HomePage.scss";

function HomePage() {
  return (
    <div className="HomePage">
      <img src={logo} className="logo react" alt="Glacepedia logo" />
      <h1>Welcome to Glacepedia</h1>
    </div>
  );
}

export default HomePage;

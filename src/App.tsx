import React from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </main>
  );
}

export default App;

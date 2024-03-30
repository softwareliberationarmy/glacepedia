import { Link } from "react-router-dom";
import { routes } from "./routes";

export const NavBar = () => (
  <nav>
    <ul>
      {routes.map((r) => (
        <li key={r.path}>
          <Link to={r.path}>{r.name}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

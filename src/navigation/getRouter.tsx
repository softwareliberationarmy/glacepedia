import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import { routes } from "./routes";

export function getRouter() {
  return createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: routes.map((r) => {
        return {
          path: r.path,
          element: r.element,
        };
      }),
    },
  ]);
}

import { ReactNode } from "react";
import HomePage from "../pages/HomePage";
import AddRecipe from "../recipes/AddRecipe";

export const routes: { path: string; element: ReactNode; name: string }[] = [
  { path: "/", element: <HomePage />, name: "Home" },
  { path: "/recipe/add", element: <AddRecipe />, name: "Add Recipe" },
];

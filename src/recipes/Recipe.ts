import { recipeSources } from "./recipeSources";

export type Recipe = {
  name: string;
  source: string;
  ingredients: string[];
};

export function isValidRecipe(recipe: Recipe): boolean {
  return (
    recipe.name.length > 0 &&
    recipe.source.length > 0 &&
    recipe.ingredients.length > 0
  );
}

export function emptyRecipe(): Recipe {
  return {
    name: "",
    source: recipeSources[0],
    ingredients: [],
  };
}

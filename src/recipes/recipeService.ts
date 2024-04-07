import { Recipe } from "./Recipe";

export function addRecipe(input: Recipe): Promise<boolean> {
  console.log("Adding recipe", input);
  return new Promise((resolve) => {
    resolve(input !== undefined);
  });
}

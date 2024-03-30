import React, { useEffect, useState } from "react";
import "./AddRecipe.scss";
import { recipeSources } from "./recipeSources";

export default function AddRecipe() {
  const [recipeName, setRecipeName] = useState("");
  const [recipeSource, setRecipeSource] = useState(recipeSources[0]);
  const [ingredient, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [formIsInvalid, setFormIsInvalid] = useState(true);

  useEffect(() => {
    setFormIsInvalid(recipeName.length === 0);
  }, [recipeName]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Recipe Name:", recipeName);
    console.log("Recipe Source:", recipeSource);
    console.log("Ingredients:", ingredients.join(", "));
  };

  function onNewIngredientText(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      setIngredients((prev) => [...prev, ingredient]);
      setIngredient("");
    }
  }

  return (
    <div className="AddRecipe">
      <h1>Add Recipe</h1>
      <form onSubmit={handleSubmit}>
        <article>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={recipeName}
            onChange={(event) => setRecipeName(event.target.value)}
          />
        </article>

        <article>
          <label htmlFor="source">Source</label>
          <select
            id="source"
            value={recipeSource}
            onChange={(event) => setRecipeSource(event.target.value)}
          >
            {recipeSources.map((source) => (
              <option key={source} value={source}>
                {source}
              </option>
            ))}
          </select>
        </article>

        <article>
          <label htmlFor="ingredient">Ingredients</label>

          <input
            id="ingredient"
            type="text"
            value={ingredient}
            onChange={(event) => setIngredient(event.target.value)}
            onKeyDown={onNewIngredientText}
          />
        </article>

        <article>
          <textarea
            placeholder="Ingredients"
            readOnly={true}
            value={ingredients.join("\n")}
          />
        </article>

        <button type="submit" disabled={formIsInvalid}>
          Submit
        </button>
      </form>
    </div>
  );
}

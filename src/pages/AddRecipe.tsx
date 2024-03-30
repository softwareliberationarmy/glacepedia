import React, { useEffect, useState } from "react";
import "./AddRecipe.scss";

export default function AddRecipe() {
  const recipeSources = ["Jeni's", "Ample Hill"];
  const [recipeName, setRecipeName] = useState("");
  const [recipeSource, setRecipeSource] = useState(recipeSources[0]);
  const [formIsInvalid, setFormIsInvalid] = useState(true);

  useEffect(() => {
    setFormIsInvalid(recipeName.length === 0);
  }, [recipeName]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Recipe Name:", recipeName);
    console.log("Recipe Source:", recipeSource);
  };

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
          <input id="ingredient" type="text" />
        </article>

        <article>
          <textarea placeholder="Ingredients" readOnly={true} />
        </article>

        <button type="submit" disabled={formIsInvalid}>
          Submit
        </button>
      </form>
    </div>
  );
}

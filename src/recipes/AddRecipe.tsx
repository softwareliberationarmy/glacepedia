import React, { useEffect, useState } from "react";
import "./AddRecipe.scss";
import { recipeSources } from "./recipeSources";
import { Recipe, isValidRecipe } from "./Recipe";

export default function AddRecipe() {
  //add a Recipe state
  const [recipe, setRecipe] = useState<Recipe>({
    name: "",
    source: recipeSources[0],
    ingredients: [],
  });

  const [ingredient, setIngredient] = useState("");
  const [formIsInvalid, setFormIsInvalid] = useState(true);

  useEffect(() => {
    setFormIsInvalid(isValidRecipe(recipe) == false);
  }, [recipe]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Recipe:", JSON.stringify(recipe));
  };

  function onNewIngredientText(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      setRecipe((prev) => ({
        ...prev,
        ingredients: [...prev.ingredients, ingredient],
      }));
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
            value={recipe.name}
            onChange={(event) =>
              setRecipe((prev) => ({ ...prev, name: event.target.value }))
            }
          />
        </article>

        <article>
          <label htmlFor="source">Source</label>
          <select
            id="source"
            value={recipe.source}
            onChange={(event) =>
              setRecipe((prev) => ({ ...prev, source: event.target.value }))
            }
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
            placeholder="Enter an ingredient"
            type="text"
            value={ingredient}
            onChange={(event) => setIngredient(event.target.value)}
            onKeyDown={onNewIngredientText}
          />
        </article>

        <article>
          <textarea
            id="ingredients"
            readOnly={true}
            value={recipe.ingredients.join("\n")}
          />
        </article>

        <button type="submit" disabled={formIsInvalid}>
          Submit
        </button>
      </form>
    </div>
  );
}

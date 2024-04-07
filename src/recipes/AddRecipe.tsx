import React, { useEffect, useState } from "react";
import "./AddRecipe.scss";
import { recipeSources } from "./recipeSources";
import { Recipe, emptyRecipe, isValidRecipe } from "./Recipe";
import { parseIngredient, toIngredientString } from "./Ingredient";

export default function AddRecipe() {
  const [recipe, setRecipe] = useState<Recipe>(emptyRecipe());

  const [ingredient, setIngredient] = useState("");
  const [formIsInvalid, setFormIsInvalid] = useState(true);
  const [invalidIngredient, setInvalidIngredient] = useState(false);

  useEffect(() => {
    setFormIsInvalid(!isValidRecipe(recipe));
  }, [recipe]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Recipe:", JSON.stringify(recipe));
    setRecipe(emptyRecipe());
  };

  function onNewIngredientText(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      setInvalidIngredient(false);
      event.preventDefault();
      const parsedIngredient = parseIngredient(ingredient);
      if (parsedIngredient) {
        setRecipe((prev) => ({
          ...prev,
          ingredients: [...prev.ingredients, parsedIngredient],
        }));
        ~setIngredient("");
      } else {
        setInvalidIngredient(true);
      }
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

        {invalidIngredient && (
          <p className="error">Invalid ingredient. Please try again.</p>
        )}
        <article>
          <textarea
            id="ingredients"
            readOnly={true}
            value={recipe.ingredients
              .map((i) => toIngredientString(i))
              .join("\n")}
          />
        </article>

        <button type="submit" disabled={formIsInvalid}>
          Add Recipe
        </button>
      </form>
    </div>
  );
}

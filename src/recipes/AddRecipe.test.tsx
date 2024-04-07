import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import AddRecipe from "./AddRecipe";
import { addRecipe } from "./recipeService";

vi.mock("./recipeService", () => ({
  addRecipe: vi.fn(),
})
)

describe("Add Recipe page", () => {
  it("disables the submit button when the name is empty", () => {
    render(<AddRecipe />);
    expect(addRecipeButton()).toBeDisabled();
  });

  it("disables the submit button when there are no ingredients", async () => {
    render(<AddRecipe />);
    await enterRecipeName("Vanilla");
    expect(addRecipeButton()).toBeDisabled();
  });

  it("disables the submit button when I add an invalid ingredient", async () => {
    render(<AddRecipe />);
    await enterRecipeName("Vanilla");
    await addIngredient("1");
    await waitFor(() => {
      expect(addRecipeButton()).toBeDisabled();
    });
    expect(screen.getByText("Invalid ingredient. Please try again.")).toBeVisible();
  });

  it("enables the submit button when I add a name and a valid ingredient and type enter", async () => {
    render(<AddRecipe />);
    await enterRecipeName("Vanilla");
    await addIngredient("1c Milk");
    await waitFor(() => {
      expect(addRecipeButton()).toBeEnabled();
    });
  });

  it("adds the recipe when I click the Add Recipe button", async () => {
    render(<AddRecipe />);
    await enterRecipeName("Vanilla");
    await addIngredient("1c Milk");
    await userEvent.click(addRecipeButton());
    await waitFor(() => {
      expect(addRecipe).toHaveBeenCalledWith({
        name: "Vanilla",
        source: "Ample Hills",
        ingredients: [{ amount: 1, unit: "cup", name: "Milk" }],
      });
    });
  }); 
});

function addIngredient(ingredient: string) {
  return userEvent.type(
    screen.getByLabelText("Ingredients"),
    ingredient + "{Enter}"
  );
}

async function enterRecipeName(flavorName: string) {
  await userEvent.type(screen.getByLabelText("Name"), flavorName);
}

function addRecipeButton(): HTMLElement {
  return screen.getByRole("button", { name: "Add Recipe" });
}

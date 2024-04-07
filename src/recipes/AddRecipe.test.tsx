import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import AddRecipe from "./AddRecipe";

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
    const ingredient = "1c Milk";
    await addIngredient(ingredient);
    await waitFor(() => {
      expect(addRecipeButton()).toBeEnabled();
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

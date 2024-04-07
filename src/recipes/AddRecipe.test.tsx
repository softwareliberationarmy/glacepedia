import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import AddRecipe from "./AddRecipe";

describe("Add Recipe page", () => {
  it("disables the submit button when the name is empty", () => {
    render(<AddRecipe />);
    expect(addRecipeButton()).toBeDisabled();
  });

  it("disables the submit button when there are no ingredients", () => {
    render(<AddRecipe />);
    enterRecipeNameOf("Vanilla");
    expect(addRecipeButton()).toBeDisabled();
  });

});

function enterRecipeNameOf(flavorName: string) {
    userEvent.type(screen.getByLabelText("Name"), flavorName);
}

function addRecipeButton(): HTMLElement {
    return screen.getByRole("button", { name: "Add Recipe" });
}


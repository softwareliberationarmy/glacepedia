import { describe, it, expect } from "vitest";
import { emptyRecipe, isValidRecipe } from "./Recipe";

describe("Recipe tests", () => {
  describe("isValidRecipe", () => {
    it("should return false if the recipe name is empty", () => {
      expect(
        isValidRecipe({ name: "", source: "source", ingredients: [""] })
      ).toBe(false);
    });

    it("should return false if the recipe source is empty", () => {
      expect(
        isValidRecipe({ name: "name", source: "", ingredients: [""] })
      ).toBe(false);
    });

    it("should return false if the recipe ingredients is empty", () => {
      expect(
        isValidRecipe({ name: "name", source: "source", ingredients: [] })
      ).toBe(false);
    });

    it("should return true if the recipe is valid", () => {
      expect(
        isValidRecipe({ name: "name", source: "source", ingredients: [""] })
      ).toBe(true);
    });
  });

  describe("emptyRecipe", () => {
    it("should return an empty recipe", () => {
      const newRecipe = emptyRecipe();
      expect(newRecipe.name.length).toBe(0);
      expect(newRecipe.ingredients.length).toBe(0);
      expect(newRecipe.source.length).toBeGreaterThan(0);
    });
  });
});

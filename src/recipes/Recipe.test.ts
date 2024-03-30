import { describe, it, expect } from "vitest";
import { isValidRecipe } from "./Recipe";

describe("Recipe tests", () => {
  describe("isValidRecipe", () => {
    it("should return false if the recipe name is empty", () => {
      expect(
        isValidRecipe({ name: "", source: "source", ingredients: [ ""] })
      ).toBe(false);
    });

    it("should return false if the recipe source is empty", () => {
      expect(
        isValidRecipe({ name: "name", source: "", ingredients: [ ""] })
      ).toBe(false);
    });

    it("should return false if the recipe ingredients is empty", () => {
      expect(
        isValidRecipe({ name: "name", source: "source", ingredients: [] })
      ).toBe(false);
    });

    it("should return true if the recipe is valid", () => {
      expect(
        isValidRecipe({ name: "name", source: "source", ingredients: [ ""] })
      ).toBe(true);
    });
  });
});

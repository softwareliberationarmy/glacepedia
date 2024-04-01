import { describe, it, expect } from "vitest";
import { parseIngredient } from "./Ingredient";

describe("Ingredient tests", () => {
  describe("parseIngredient", () => {
    it("should parse 2 eggs", () => {
      expect(parseIngredient("2 eggs")).toEqual({
        amount: 2,
        unit: "none",
        name: "eggs",
      });
    });

    it("should parse 2 egg yolks", () => {
        expect(parseIngredient("2 egg yolks")).toEqual({
          amount: 2,
          unit: "none",
          name: "egg yolks",
        });
      });
  
      it("should parse 1 cup of sugar", () => {
      expect(parseIngredient("1c sugar")).toEqual({
        amount: 1,
        unit: "cup",
        name: "sugar",
      });
    });

    it("should parse 1 cup of brown sugar", () => {
      expect(parseIngredient("1c brown sugar")).toEqual({
        amount: 1,
        unit: "cup",
        name: "brown sugar",
      });
    });
  });
});


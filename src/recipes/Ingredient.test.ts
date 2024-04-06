import { describe, it, expect } from "vitest";
import { parseIngredient, toIngredientString } from "./Ingredient";

describe("Ingredient tests", () => {
  const testIngredients = [
    {
      stringVersion: "2 eggs",
      ingredient: {
        amount: 2,
        unit: "none",
        name: "eggs",
      },
    },
    {
      stringVersion: "2 egg yolks",
      ingredient: {
        amount: 2,
        unit: "none",
        name: "egg yolks",
      },
    },
    {
      stringVersion: "1c sugar",
      ingredient: {
        amount: 1,
        unit: "cup",
        name: "sugar",
      },
    },
    {
      stringVersion: "1c brown sugar",
      ingredient: {
        amount: 1,
        unit: "cup",
        name: "brown sugar",
      },
    },
    {
      stringVersion: "0.75c brown sugar",
      ingredient: {
        amount: 0.75,
        unit: "cup",
        name: "brown sugar",
      },
    },
    {
      stringVersion: "0.25t baking soda",
      ingredient: {
        amount: 0.25,
        unit: "teaspoon",
        name: "baking soda",
      },
    },
    {
      stringVersion: "1T vanilla",
      ingredient: {
        amount: 1,
        unit: "tablespoon",
        name: "vanilla",
      },
    },
  ];

  describe("parseIngredient", () => {
    it("should parse test ingredients", () => {
      testIngredients.forEach((test) => {
        expect(parseIngredient(test.stringVersion)).toEqual(test.ingredient);
      });
    });
  });

  describe("toIngredientString", () => {
    it("should create the correct string for an ingredient", () => {
      testIngredients.forEach((test) => {
        expect(toIngredientString(test.ingredient)).toBe(test.stringVersion);
      });
    });
  });
});

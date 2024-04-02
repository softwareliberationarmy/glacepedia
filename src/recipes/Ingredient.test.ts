import { describe, it, expect } from "vitest";
import { parseIngredient } from "./Ingredient";

describe("Ingredient tests", () => {
  describe("parseIngredient", () => {
    const testIngredients = [
      {
        input: "2 eggs",
        expected: {
          amount: 2,
          unit: "none",
          name: "eggs",
        },
      },
      {
        input: "2 egg yolks",
        expected: {
          amount: 2,
          unit: "none",
          name: "egg yolks",
        },
      },
      {
        input: "1c sugar",
        expected: {
          amount: 1,
          unit: "cup",
          name: "sugar",
        },
      },
      {
        input: "1c brown sugar",
        expected: {
          amount: 1,
          unit: "cup",
          name: "brown sugar",
        },
      },
      {
        input: ".75c brown sugar",
        expected: {
          amount: 0.75,
          unit: "cup",
          name: "brown sugar",
        },
      },
      {
        input: ".25t baking soda",
        expected: {
          amount: 0.25,
          unit: "teaspoon",
          name: "baking soda",
        },
      },
      {
        input: "1T vanilla",
        expected: {
          amount: 1,
          unit: "tablespoon",
          name: "vanilla",
        },
      },
    ];

    it("should parse test ingredients", () => {
      testIngredients.forEach((test) => {
        expect(parseIngredient(test.input)).toEqual(test.expected);
      });
    });
  });
});

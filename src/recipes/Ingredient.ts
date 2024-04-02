type Unit = "none" | "cup" | "teaspoon" | "tablespoon";

export type Ingredient = {
  amount: number;
  unit: Unit;
  name: string;
};

export function parseIngredient(input: string): Ingredient | undefined {
  const parts = input.split(" ");
  if (parts.length >= 2) {
    const firstPart = parts[0];
    const secondPart = input.substring(firstPart.length + 1);

    let result: Ingredient | undefined;

    result = tryParseQuantity(firstPart, secondPart);

    if (!result) {
      result = tryParseWithUnit(firstPart, secondPart);
    }

    return result;
  }

  return undefined;
}

function tryParseQuantity(
  firstPart: string,
  secondPart: string
): Ingredient | undefined {
  const numberMatch = firstPart.match(/^(\d+(\.\d*)?|\.\d+)$/);
  if (numberMatch) {
    const qty = parseFloat(numberMatch[1]);
    return { amount: qty, unit: "none", name: secondPart };
  }
  return undefined;
}

function tryParseWithUnit(
  firstPart: string,
  secondPart: string
): Ingredient | undefined {
  const numberUnitMatch = firstPart.match(/^(\d+(\.\d*)?|\.\d+)([a-zA-Z]*)$/);
  if (numberUnitMatch) {
    const qty = parseFloat(numberUnitMatch[1]);
    const unit = getUnit(numberUnitMatch[3]);

    if (unit) {
      return { amount: qty, unit: unit, name: secondPart };
    }
  }
  return undefined;
}

const units = new Map<string, Unit>([
  ["c", "cup"],
  ["t", "teaspoon"],
  ["T", "tablespoon"],
]);

function getUnit(input: string) {
  return units.get(input);
}

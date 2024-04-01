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

    const numberMatch = firstPart.match(/^(\d+(\.\d+)?)$/);
    if (numberMatch) {
      const qty = parseFloat(numberMatch[1]);
      return { amount: qty, unit: "none", name: secondPart };
    } else {
      const numberUnitMatch = firstPart.match(/^(\d+(\.\d+)?)([a-zA-Z]*)$/);
      if (numberUnitMatch) {
        const qty = parseFloat(numberUnitMatch[1]);
        const unit = numberUnitMatch[3];
        if (unit === "c") {
          return { amount: qty, unit: "cup", name: secondPart };
        }
      }
    }
  }

  return undefined;
}

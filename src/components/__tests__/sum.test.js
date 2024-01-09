import { sum } from "../sum";

test("This function should calculate the sum of two numbers", () => {
  const result = sum(4, 7);

  // Asertion
  expect(result).toBe(11);
});

import { expect, test } from "vitest";

test("it sum two numbers", async () => {
  let a = 2;
  let b = 2;
  const c = a + b;

  expect(c).toEqual(4);
});

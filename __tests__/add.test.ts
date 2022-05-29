import { add } from "../src/utils/add";

test('add 1 + 2 eq 3', () => {
  expect(add(1, 2)).toBe(3);
})
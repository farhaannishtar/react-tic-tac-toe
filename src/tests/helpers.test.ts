import { addStuff } from "../components/helpers";

test("addStuff", () => {
  expect(addStuff(1, 1)).toBe(2);
  expect(addStuff(2, 4)).toBe(6);
});

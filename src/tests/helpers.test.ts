import { addStuff, calculateWinner } from "../components/helpers";

test("addStuff", () => {
  expect(addStuff(1, 1)).toBe(2);
  expect(addStuff(2, 4)).toBe(6);
});

test("calculateWinner, horizontal case", () => {
  expect(calculateWinner(["X", "X", "X", "O", "-", "O", "-", "-", "-"])).toBe(
    "X"
  );
  expect(calculateWinner(["X", "X", "O", "O", "O", "O", "-", "-", "-"])).toBe(
    "O"
  );
});

test("calculateWinner, vertical case", () => {
  // X should win
  expect(calculateWinner(["X", "O", "X", "X", "-", "O", "X", "-", "-"])).toBe(
    "X"
  );
  // O should win
  expect(calculateWinner(["X", "O", "X", "X", "-", "O", "X", "-", "-"])).toBe(
    "X"
  );
});

test("calculateWinner, diagonal case", () => {
  // X should win
  expect(calculateWinner(["X", "O", "-", "O", "X", "O", "X", "-", "X"])).toBe(
    "X"
  );
  // O should win
  expect(calculateWinner(["O", "-", "-", "X", "O", "O", "-", "X", "O"])).toBe(
    "O"
  );
});

test("calculateWinner, no winner", () => {
  expect(calculateWinner(["X", "O", "X", "X", "-", "O", "-", "-", "-"])).toBe(
    null
  );
});

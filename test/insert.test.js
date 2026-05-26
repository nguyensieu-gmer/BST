import { Tree } from "../main";

let t;
beforeEach(() => {
  t = new Tree([10, 10, 9, 9, 8, 7, 7, 7, 6, 5, 1, 1, 1, 2, 3, 3, 3, 4]);
});
afterEach(() => {
  t = undefined;
});

test("insert didn't exist value into tree", () => {
  t.insert(0);
  expect(t.includes(0)).toBe(true);
});

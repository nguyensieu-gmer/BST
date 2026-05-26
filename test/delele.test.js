import { Tree } from "../main";

let t;
beforeEach(() => {
  t = new Tree([10, 10, 9, 9, 8, 7, 7, 7, 6, 5, 1, 1, 1, 2, 3, 3, 3, 4]);
});
afterEach(() => {
  t = undefined;
});

test("delete leaf node", () => {
  t.deleteItem(1);
  expect(t.includes(1)).toBe(false);
});

test("delete 1 child node", () => {
  t.deleteItem(3);
  expect(t.includes(3)).toBe(false);
});

test("delete 2 child node", () => {
  t.deleteItem(8);
  expect(t.includes(8)).toBe(false);
});

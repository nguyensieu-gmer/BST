import { Tree } from "../main";

let t;
beforeEach(() => {
  t = new Tree();
});
afterEach(() => {
  t = undefined;
});

test("build function", () => {
  expect(t.removeDuplicate([1, 1, 1, 2, 2, 3])).toEqual([1, 2, 3]);
  expect(
    t.removeDuplicate([10, 10, 9, 9, 8, 7, 7, 7, 6, 5, 1, 1, 1, 2, 3, 3, 3, 4]),
  ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

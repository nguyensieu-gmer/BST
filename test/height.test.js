import { Tree } from "../main";

test("test with normal tree", () => {
  const tree = new Tree([
    10, 10, 9, 9, 8, 7, 7, 7, 6, 5, 1, 1, 1, 2, 3, 3, 3, 4,
  ]);
  expect(tree.height(5)).toBe(3);
});

test("test with node not in tree", () => {
  const tree = new Tree([
    10, 10, 9, 9, 8, 7, 7, 7, 6, 5, 1, 1, 1, 2, 3, 3, 3, 4,
  ]);
  expect(tree.height(0)).toBe(undefined);
});

test("test with 1 node tree", () => {
  const tree = new Tree([10]);
  expect(tree.height(10)).toBe(0);
  expect(tree.height(1)).toBe(undefined);
});

test("with null root", () => {
  const tree = new Tree();
  expect(tree.height(1)).toBe(undefined);
});

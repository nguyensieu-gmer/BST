import { Tree } from "../main";

test("with normal tree", () => {
  const tree = new Tree([
    10, 10, 9, 9, 8, 7, 7, 7, 6, 5, 1, 1, 1, 2, 3, 3, 3, 4,
  ]);
  expect(tree.depth(9)).toBe(2);
  expect(tree.depth(10)).toBe(3);
  expect(tree.depth(5)).toBe(0);
  expect(tree.depth(2)).toBe(1);
});

test("with root is null", () => {
  const tree = new Tree();
  expect(tree.depth(10)).toBe(undefined);
});

test("with node not in tree", () => {
  const tree = new Tree([
    10, 10, 9, 9, 8, 7, 7, 7, 6, 5, 1, 1, 1, 2, 3, 3, 3, 4,
  ]);
  expect(tree.depth(0)).toBe(undefined);
});

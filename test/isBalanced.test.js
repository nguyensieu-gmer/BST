import { Tree } from "../main";

test("tree is balance", () => {
  const tree = new Tree([
    10, 10, 9, 9, 8, 7, 7, 7, 6, 5, 1, 1, 1, 2, 3, 3, 3, 4,
  ]);
  expect(tree.isBalanced()).toBe(true);
});

test("is null root tree", () => {
  const tree = new Tree();
  expect(tree.isBalanced()).toBe(true);
});

test("is not balanced tree", () => {
  const tree = new Tree();
  tree.insert(0);
  tree.insert(1);
  tree.insert(2);
  tree.insert(3);
  tree.insert(4);
  expect(tree.isBalanced()).toBe(false);
});

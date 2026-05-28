import { Tree } from "../main";

test("unbalanced Tree", () => {
  const tree = new Tree();
  tree.insert(1);
  tree.insert(2);
  tree.insert(3);
  tree.insert(4);
  tree.insert(5);
  expect(tree.isBalanced()).toBe(false);
  tree.rebalance();
  expect(tree.isBalanced()).toBe(true);
});

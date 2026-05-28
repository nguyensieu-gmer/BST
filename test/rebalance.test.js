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

test("don't lost data when rebalance", () => {
  const tree = new Tree([1, 2, 3, 4, 5, 6]);
  const before = [];
  tree.inOrderForEach((val) => before.push(val));
  tree.rebalance();
  const after = [];
  tree.inOrderForEach((val) => after.push(val));
  expect(before).toEqual(after);
});

test("don't change when rebalance twice", () => {
  const tree = new Tree();
  [1, 2, 3, 4, 5, 6].forEach((v) => tree.insert(v));
  tree.rebalance();
  const first = [];
  tree.inOrderForEach((val) => first.push(val));
  tree.rebalance();
  const second = [];
  tree.inOrderForEach((val) => second.push(val));
  expect(first).toEqual(second);
});

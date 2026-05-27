import { Tree } from "../main";

test("Height of 8 to be 2", () => {
  const tree = new Tree([
    10, 10, 9, 9, 8, 7, 7, 7, 6, 5, 1, 1, 1, 2, 3, 3, 3, 4,
  ]);
  const node = tree.findNode(8);
  const res = tree.findHeightOf(node);
  expect(res).toBe(2);
});

test("one node tree", () => {
  const tree = new Tree([1]);
  const node = tree.findNode(1);
  const res = tree.findHeightOf(node);
  expect(res).toBe(0);
});

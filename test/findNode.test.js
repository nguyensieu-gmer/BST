import { Tree } from "../main";

test("test with node in balanced tree", () => {
  const tree = new Tree([
    10, 10, 9, 9, 8, 7, 7, 7, 6, 5, 1, 1, 1, 2, 3, 3, 3, 4,
  ]);
  let res = tree.findNode(2);
  expect(res.data).toBe(2);
});

test("test with node not in balanced tree", () => {
  const tree = new Tree([
    10, 10, 9, 9, 8, 7, 7, 7, 6, 5, 1, 1, 1, 2, 3, 3, 3, 4,
  ]);
  let res = tree.findNode(0);
  expect(res).toBe(undefined);
});

test("1 node tree", () => {
  const tree = new Tree([4]);
  let res = tree.findNode(4);
  expect(res.data).toBe(4);
  res = tree.findNode(0);
  expect(res).toBe(undefined);
});

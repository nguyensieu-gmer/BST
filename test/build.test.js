import { Tree } from "../main";

test("", () => {
  const tree = new Tree();
  expect(tree.build([], 0, 0 - 1)).toBe(null);
});

import { Tree } from "../main";

test("test with correct order", () => {
  const tree = new Tree([1, 2, 3, 4, 5]);
  let res = [];
  tree.postOrderForEach((val) => res.push(val));
  expect(res).toEqual([2, 1, 5, 4, 3]);
});

test("correct time", () => {
  const tree = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  let count = 0;
  tree.postOrderForEach(() => (count += 1));
  expect(count).toBe(10);
});

test("callback is not function", () => {
  const tree = new Tree([1, 2, 3, 4, 5]);
  expect(() => tree.postOrderForEach(10)).toThrow("callback is not function");
});

test("root is null", () => {
  const tree = new Tree();
  let count = 0;
  tree.postOrderForEach(() => count++);
  expect(count).toBe(0);
});

test("callback have been called", () => {
  const tree = new Tree([1, 2, 3, 4]);
  const mockFn = jest.fn();
  tree.postOrderForEach(mockFn);
  expect(mockFn).toHaveBeenCalled();
});

test("callback with exact order", () => {
  const tree = new Tree([1, 2, 3, 4, 5]);
  const mockFn = jest.fn();
  tree.postOrderForEach(mockFn);
  expect(mockFn.mock.calls.map((c) => c[0])).toEqual([2, 1, 5, 4, 3]);
});

import { Tree } from "../main";

test("correct order", () => {
  const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);
  let result = [];
  tree.preOrderForEach((val) => result.push(val));
  expect(result).toEqual([4, 2, 1, 3, 6, 5, 7]);
});

test("correct time", () => {
  const tree = new Tree([1, 2, 3, 4]);
  let count = 0;
  tree.preOrderForEach((val) => count++);
  expect(count).toBe(4);
});

test("callback is not function", () => {
  const tree = new Tree([1, 2, 3, 4]);
  expect(() => tree.preOrderForEach("hi")).toThrow("callback is not function");
});

test("null root", () => {
  const tree = new Tree();
  let count = 0;
  tree.preOrderForEach((val) => count++);
  expect(count).toBe(0);
});

test("callback is called", () => {
  const tree = new Tree([1, 2, 3, 4]);
  const mockFn = jest.fn();
  tree.preOrderForEach(mockFn);
  expect(mockFn).toHaveBeenCalled();
});

test("callback is called by accurate order", () => {
  const tree = new Tree([1, 2, 3, 4]);
  const mockFn = jest.fn();
  tree.preOrderForEach(mockFn);
  expect(mockFn.mock.calls.map((c) => c[0])).toEqual([2, 1, 3, 4]);
});

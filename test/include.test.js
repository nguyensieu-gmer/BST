import { Tree } from "../main";

let t;
describe("test with not empty tree", () => {
  beforeEach(() => {
    t = new Tree([10, 10, 9, 9, 8, 7, 7, 7, 6, 5, 1, 1, 1, 2, 3, 3, 3, 4]);
  });
  afterEach(() => {
    t = undefined;
  });

  test("test with number in tree", () => {
    expect(t.includes(1)).toBe(true);
    expect(t.includes(6)).toBe(true);
    expect(t.includes(11)).toBe(false);
  });
});

describe("test with empty tree", () => {
  beforeEach(() => {
    t = new Tree();
  });
  afterEach(() => {
    t = undefined;
  });

  test("test with number in tree", () => {
    expect(t.includes(1)).toBe(false);
  });
});

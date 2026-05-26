import { Tree } from "../main";

let t;
beforeEach(() => {
  t = new Tree([10, 10, 9, 9, 8, 7, 7, 7, 6, 5, 1, 1, 1, 2, 3, 3, 3, 4]);
});
afterEach(() => {
  t = undefined;
});

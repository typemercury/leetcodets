import { uniquePaths } from './index';

test('[3, 7] returns 28.', () => {
  expect(uniquePaths(3, 7)).toEqual(28);
});
test('[3, 2] returns 3.', () => {
  expect(uniquePaths(3, 2)).toEqual(3);
});
test('[7, 3] returns 28.', () => {
  expect(uniquePaths(7, 3)).toEqual(28);
});
test('[3, 3] returns 6.', () => {
  expect(uniquePaths(3, 3)).toEqual(6);
});

import { maxArea } from './index';

test('max area of [1,8,6,2,5,4,8,3,7] is 49', () => {
  expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
});

test('max area of [1,1] is 1', () => {
  expect(maxArea([1, 1])).toEqual(1);
});

test('max area of [4,3,2,1,4] is 16', () => {
  expect(maxArea([4, 3, 2, 1, 4])).toEqual(16);
});

test('max area of [1,2,1] is 2', () => {
  expect(maxArea([1, 2, 1])).toEqual(2);
});

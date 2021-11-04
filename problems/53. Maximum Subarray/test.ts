import { maxSubArray } from './index';

test('maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) returns 6', () => {
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
});

test('maxSubArray([1]) returns 1', () => {
  expect(maxSubArray([1])).toEqual(1);
});

test('maxSubArray([-2,1]) returns 1', () => {
  expect(maxSubArray([-2, 1])).toEqual(1);
});

test('maxSubArray([-1]) returns -1', () => {
  expect(maxSubArray([-1])).toEqual(-1);
});

test('maxSubArray([5,4,-1,7,8]) returns 23', () => {
  expect(maxSubArray([5, 4, -1, 7, 8])).toEqual(23);
});

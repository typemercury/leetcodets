import { maxProduct } from './index';

test('maxProduct([2,3,-2,4]) returns 6', () => {
  expect(maxProduct([2, 3, -2, 4])).toEqual(6);
});

test('maxProduct([2,3,-2,4]) returns 6', () => {
  expect(maxProduct([-2, 0, -1])).toEqual(0);
});

test('maxProduct([-2,3,-4]) returns 24', () => {
  expect(maxProduct([-2, 3, -4])).toEqual(24);
});

test('maxProduct([-1,-2,-9,-6]) returns 108', () => {
  expect(maxProduct([-1, -2, -9, -6])).toEqual(108);
});

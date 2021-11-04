import { findMin } from './index';

test('findMin([3,4,5,1,2]) returns 1', () => {
  expect(findMin([3, 4, 5, 1, 2])).toEqual(1);
});
test('findMin([4,5,6,7,0,1,2]) returns 0', () => {
  expect(findMin([4, 5, 6, 7, 0, 1, 2])).toEqual(0);
});
test('findMin([11,13,15,17]) returns 11', () => {
  expect(findMin([11, 13, 15, 17])).toEqual(11);
});

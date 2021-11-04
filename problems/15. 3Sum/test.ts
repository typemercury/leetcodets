import { threeSum } from './index';

test('threeSum([-1, 0, 1, 2, -1, -4]) returns [ [-1, 0, 1], [-1, -1, 2] ]', () => {
  const recieved = threeSum([-1, 0, 1, 2, -1, -4]);
  expect(recieved.length).toEqual(2);
  expect(recieved).toEqual([
    [-1, -1, 2],
    [-1, 0, 1],
  ]);
});

test('threeSum([-2,0,1,1,2]) returns [[[-2,0,2],[-2,1,1]]]', () => {
  expect(threeSum([-2, 0, 1, 1, 2])).toEqual([
    [-2, 0, 2],
    [-2, 1, 1],
  ]);
});

test('threeSum([0, 0, 0, 0]) returns [[0,0,0]]', () => {
  expect(threeSum([0, 0, 0, 0])).toEqual([[0, 0, 0]]);
});

test('', () => {
  expect(threeSum([])).toEqual([]);
});

test('', () => {
  expect(threeSum([0])).toEqual([]);
});

import { rob } from './index';

test('[1, 2, 3, 1] returns 4', () => {
  expect(rob([1, 2, 3, 1])).toEqual(4);
});

test('[2,7,9,3,1] returns 12', () => {
  expect(rob([2, 7, 9, 3, 1])).toEqual(12);
});

test('[1,1,1,2] returns 3', () => {
  expect(rob([1, 1, 1, 2])).toEqual(3);
});

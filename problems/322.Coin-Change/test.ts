import { coinChange } from './index';

test('([1, 2, 5], 11) returns 2.', () => {
  expect(coinChange([1, 2, 5], 11)).toEqual(3);
});

test('([1, 2, 5], 1234) returns 248.', () => {
  expect(coinChange([1, 2, 5], 1234)).toEqual(248);
});

test('([2], 3) returns -1', () => {
  expect(coinChange([2], 3)).toEqual(-1);
});

test('', () => {
  expect(coinChange([1], 0)).toEqual(0);
});

test('', () => {
  expect(coinChange([1], 1)).toEqual(1);
});

test('', () => {
  expect(coinChange([1], 2)).toEqual(2);
});

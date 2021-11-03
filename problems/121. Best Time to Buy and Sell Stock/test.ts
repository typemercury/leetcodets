import { maxProfit } from './index';

test('max profit of [7,1,5,3,6,4] is 5', () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(5);
});

test('max profit of [7,6,4,3,1] is 0', () => {
  expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0);
});

test('max profit of [2,1,4] is 3', () => {
  expect(maxProfit([2, 1, 4])).toEqual(3);
});

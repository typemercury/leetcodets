import { lengthOfLIS } from './index';

test('The longest increasing subsequence of [10,9,2,5,3,7,101,18] has length of 4.', () => {
  expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toEqual(4);
});

test('The longest increasing subsequence of [0,1,0,3,2,3] has length of 4.', () => {
  expect(lengthOfLIS([0, 1, 0, 3, 2, 3])).toEqual(4);
});

test('The longest increasing subsequence of [7,7,7,7,7,7,7] has length of 1.', () => {
  expect(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])).toEqual(1);
});

import { lengthOfLongestSubstring } from './index';

test("length of longest substring of '' is 0", () => {
  expect(lengthOfLongestSubstring('')).toEqual(0);
});

test("length of longest substring of 'a' is 1", () => {
  expect(lengthOfLongestSubstring('a')).toEqual(1);
});

test("length of longest substring of 'abcabcbb' is 3", () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
});

test("length of longest substring of 'bbbbb' is 1", () => {
  expect(lengthOfLongestSubstring('bbbbb')).toEqual(1);
});

test("length of longest substring of 'pwwkew' is 3", () => {
  expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
});

test("length of longest substring of 'tmmzuxt' is 5", () => {
  expect(lengthOfLongestSubstring('tmmzuxt')).toEqual(5);
});

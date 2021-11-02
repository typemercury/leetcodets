import { isAnagram } from './index';

test("'anagram' is an anagram of 'nagaram'", () => {
  expect(isAnagram('anagram', 'nagaram')).toEqual(true);
});

test("'rat' is not an anagram of 'car'", () => {
  expect(isAnagram('rat', 'car')).toEqual(false);
});

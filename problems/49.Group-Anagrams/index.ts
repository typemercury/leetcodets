// tags: #string
// https://leetcode.com/problems/group-anagrams/
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

export const groupAnagrams = (strs: string[]): string[][] => {
  const map: Record<string, string[]> = {};
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    const key = str.split('').sort().join('');
    if (!map[key]) {
      map[key] = [str];
    } else {
      map[key].push(str);
    }
  }
  return Object.values(map);
};

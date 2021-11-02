// tags: #string
// https://leetcode.com/problems/valid-anagram/
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once

export const isAnagram = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false;
  const map: Record<string, number> = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }
  for (let i = 0; i < t.length; i++) {
    if (!map[t[i]]) return false;
    map[t[i]]--;
  }
  //   return Object.values(map).every((v) => v === 0);
  return true;
};

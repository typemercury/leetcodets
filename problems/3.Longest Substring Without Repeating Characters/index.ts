// #string
// Given a string s, find the length of the longest substring without repeating characters.
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

export const lengthOfLongestSubstring = (s: string): number => {
  return slidingWindowSol(s);
};

// brute force, slow
const bruteForceSol = (s: string): number => {
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    const cache: Record<string, boolean> = { [s[i]]: true };
    let localmax = 1;
    let cursor = i + 1;
    while (cursor < s.length && !cache[s[cursor]]) {
      cache[s[cursor]] = true;
      localmax++;
      cursor++;
    }
    if (localmax > max) max = localmax;

    if (max > s.length - i) break;
  }

  return max;
};

// time: O(n)
const slidingWindowSol = (s: string): number => {
  if (!s) return 0;

  let max = 0;
  let from = 0;
  const lastAppear: Record<string, number> = {};

  for (let to = 0; to < s.length; to++) {
    const lastAppearIndex = lastAppear[s[to]];
    // encounter repeating char
    if (lastAppearIndex != null && lastAppearIndex >= from) {
      from = lastAppearIndex + 1;
    }

    const substrLen = to - from + 1;
    max = Math.max(substrLen, max);

    lastAppear[s[to]] = to;
  }

  return max;
};

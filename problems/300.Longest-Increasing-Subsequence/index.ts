// tags: #dynamicprogramming
// https://leetcode.com/problems/longest-increasing-subsequence/
// Given an integer array nums, return the length of the longest strictly increasing subsequence.
// A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements.
// For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

export const lengthOfLIS = (nums: number[]): number => {
  const result = Array(nums.length).fill(1);
  let maxLength = 1;
  for (let curr = 1; curr < nums.length; curr++) {
    for (let prev = 0; prev < curr; prev++) {
      if (nums[curr] > nums[prev]) {
        result[curr] = Math.max(result[prev] + 1, result[curr]);
      }
    }
    if (result[curr] > maxLength) {
      maxLength = result[curr];
    }
  }
  return maxLength;
};

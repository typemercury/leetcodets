// tags: #array #dynamicprogramming
// https://leetcode.com/problems/maximum-subarray/
// Given an integer array nums,
// find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.

export const maxSubArray = (nums: number[]): number => {
  let max = nums[0];
  let localMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    localMax = Math.max(nums[i], localMax + nums[i]);
    max = Math.max(max, localMax);
  }
  return max;
};

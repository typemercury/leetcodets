// tags: #array #dynamicprogramming
// https://leetcode.com/problems/maximum-product-subarray/
// Given an integer array nums,
// find a contiguous non-empty subarray within the array that has the largest product, and return the product.
// It is guaranteed that the answer will fit in a 32-bit integer.
// A subarray is a contiguous subsequence of the array.

export const maxProduct = (nums: number[]): number => {
  let max = nums[0];
  let localMax = nums[0];
  let localMin = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const prevLocalMax = localMax;
    const prevLocalMin = localMin;
    localMax = Math.max(
      nums[i],
      nums[i] * (nums[i] > 0 ? prevLocalMax : prevLocalMin)
    );
    localMin = Math.min(
      nums[i],
      nums[i] * (nums[i] > 0 ? prevLocalMin : prevLocalMax)
    );
    max = Math.max(max, localMax);
  }
  return max;
};

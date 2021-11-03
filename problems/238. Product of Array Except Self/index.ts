// tags: #array
// https://leetcode.com/problems/product-of-array-except-self
/// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

export const productExceptSelf = (nums: number[]): number[] => {
  const left = Array(nums.length).fill(1);
  const right = Array(nums.length).fill(1);
  // from left
  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }
  // from right
  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }
  return left.map((num, i) => num * right[i]);
};

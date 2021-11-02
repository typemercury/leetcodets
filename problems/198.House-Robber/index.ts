// tags: #dynamicprogramming
// https://leetcode.com/problems/house-robber/
// You are a professional robber planning to rob houses along a street.
// Each house has a certain amount of money stashed,
// the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

export const rob = (nums: number[]): number => {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(...nums);

  const result = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < nums.length; i++) {
    const money = Math.max(result[i - 1], nums[i] + result[i - 2]);
    result.push(money);
  }
  return result.pop()!;
};

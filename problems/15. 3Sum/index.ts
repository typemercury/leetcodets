// tags: #array
// https://leetcode.com/problems/3sum/
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

export const threeSum = (nums: number[]): number[][] => {
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    // remove duplicate cases
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    const target = 0 - nums[i];
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const twosum = nums[left] + nums[right];
      if (twosum === target) {
        res.push([nums[i], nums[left], nums[right]]);
        right--;
        while (nums[right] === nums[right + 1]) {
          right--;
        }
      } else {
        if (twosum > target) {
          right--;
        } else {
          left++;
        }
      }
    }
  }
  return res;
};

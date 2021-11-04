// tags: #array
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

export const findMin = (nums: number[]): number => {
  while (nums.length > 3) {
    if (nums[0] < nums[nums.length - 1]) return nums[0];
    const middle = Math.floor(nums.length / 2);
    if (nums[middle] < nums[middle - 1] && nums[middle] < nums[middle + 1])
      nums[middle];
    // in left half
    if (nums[middle] < nums[0]) {
      nums = nums.slice(0, middle + 1);
    } else {
      // right half
      nums = nums.slice(middle + 1, nums.length);
    }
  }
  return Math.min(...nums);
};

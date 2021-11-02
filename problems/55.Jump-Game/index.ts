// tags: #dynamicprogramming #greedy
// https://leetcode.com/problems/jump-game/
// You are given an integer array nums.
// You are initially positioned at the array's first index,
// and each element in the array represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.

export const canJump = (nums: number[]): boolean => {
  // greedy, O(n)
  let maxReachableDist = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (maxReachableDist < i) return false;
    maxReachableDist = Math.max(i + nums[i], maxReachableDist);
  }
  return true;
};

// dp, O(n^2)
const sol1 = (nums: number[]): boolean => {
  if (nums.length === 1) return true;
  if (nums.length === 2) return nums[0] >= 1;

  const canJumpArr = [true, nums[0] >= 1];
  for (let i = 2; i < nums.length; i++) {
    let result = false;
    for (let j = 0; j < i; j++) {
      if (canJumpArr[j] && nums[j] >= i - j) {
        result = true;
        break;
      }
    }
    canJumpArr.push(result);
  }
  return canJumpArr.pop()!;
};

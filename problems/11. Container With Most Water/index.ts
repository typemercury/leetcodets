// tags: #array
// https://leetcode.com/problems/container-with-most-water/
// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
// n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0).
// Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
// Notice that you may not slant the container.

export const maxArea = (height: number[]): number => {
  let i = 0;
  let j = height.length - 1;
  let maxArea = 0;
  while (i < j) {
    const h = Math.min(height[i], height[j]);
    const w = j - i;
    maxArea = Math.max(maxArea, h * w);
    height[i] > height[j] ? j-- : i++;
  }
  return maxArea;
};

// O(n^2)
export const sol1 = (height: number[]): number => {
  const maxAreas = Array(height.length).fill(0);
  let result = 0;
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const h = Math.min(height[i], height[j]);
      const w = j - i;
      result = Math.max(result, h * w);
    }
  }
  return result;
};

// tags: #dynamicprogramming
// https://leetcode.com/problems/unique-paths/
// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
// The robot can only move either down or right at any point in time.
// The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
// How many possible unique paths are there?

export const uniquePaths = (m: number, n: number): number => {
  // if (m === 1 || n === 1) return 1;
  // return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
  const cache = Array(m).fill(Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        cache[i][j] = 1;
        continue;
      }
      cache[i][j] = cache[i - 1][j] + cache[i][j - 1];
    }
  }
  return cache[m - 1][n - 1];
};

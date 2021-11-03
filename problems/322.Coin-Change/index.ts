// tags: #dynamicprogramming
// https://leetcode.com/problems/coin-change/
// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.

export const coinChange = (coins: number[], amount: number): number => {
  if (amount === 0) return 0;
  const result = Array(amount + 1).fill(-1);
  const minCoin = Math.min(...coins);
  for (let i = 1; i <= amount; i++) {
    if (i < minCoin) {
      result[i] = -1;
      continue;
    }
    if (coins.includes(i)) {
      result[i] = 1;
      continue;
    }
    let min = Infinity;
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= minCoin && result[i - coins[j]] !== -1) {
        min = Math.min(min, result[i - coins[j]] + 1);
      }
    }
    result[i] = min === Infinity ? -1 : min;
  }
  return result[result.length - 1];
};

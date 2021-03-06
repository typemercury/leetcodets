// tags: #array
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

export const maxProfit = (prices: number[]): number => {
  let maxProfit = 0;
  let lowestPrice = prices[0];
  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i];
    const profit = currentPrice - lowestPrice;
    maxProfit = Math.max(maxProfit, profit);
    if (currentPrice < lowestPrice) {
      lowestPrice = currentPrice;
    }
  }
  return maxProfit;
};

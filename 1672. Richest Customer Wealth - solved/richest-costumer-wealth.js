/**
 * @param {number[][]} accounts
 * @return {number}
 */

const sum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

var maximumWealth = function (accounts) {
  let max_wealth = 0;
  for (let balance of accounts) {
    const current_wealth = sum(balance);
    max_wealth = Math.max(max_wealth, current_wealth);
  }
  return max_wealth;
};

console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
); // 10

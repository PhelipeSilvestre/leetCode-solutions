/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const results = new Array(nums.length);
  results[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    results[i] = results[i - 1] + nums[i];
  }
  return results;
};

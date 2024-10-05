/**
 * @param {number} n
 * @return {string[]}
 */

var fizzBuzz = function (n) {
  let arr = new Array(n);

  for (let i = 1; i <= n; i++) {
    let divisiblePer3 = i % 3 === 0 ? true : false;
    let divisiblePer5 = i % 5 === 0 ? true : false;

    if (divisiblePer3 && divisiblePer5) {
      arr[i] = "FizzBuzz";
    } else if (divisiblePer3) {
      arr[i] = "Fizz";
    } else if (divisiblePer5) {
      arr[i] = "Buzz";
    } else {
      arr.push(i);
    }
  }
  return arr;
};

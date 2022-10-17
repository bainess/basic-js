const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(arg) {
  let controlArr = [];
  let a = [];
  a = arg.toString().split('');
  for (let i = 0; i <= a.length-1; i++)  {
    let a = arg.toString().split('');
    let b = JSON.parse(JSON.stringify(a));
    b.splice(i,1);
    b = b.join('');
    controlArr.push(b);
  }
  let res = controlArr.reduce((a, b) => (a > b) ? a : b);
  return +res;
}

module.exports = {
  deleteDigit
};

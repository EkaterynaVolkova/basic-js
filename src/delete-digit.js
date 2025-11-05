const { NotImplementedError } = require('../lib');

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
function deleteDigit(n) {
  let str = n.toString();
  let res = 0;
  let new_str;
  for(let i = 0; i < str.length; i++) {
    new_str = str.slice(0, i) + str.slice(i + 1);
    if (Number(new_str) > res) {
      res = Number(new_str);
    }
  }
  return res;
}

module.exports = {
  deleteDigit
};

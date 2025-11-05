const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};
  for (const value of domains) {
    const parts = value.split(".");
    if (parts.length) {
      let current_index = '';
      parts.reverse();
       for (const part of parts) {
         current_index = current_index + '.' + part;
         if (res[current_index] === undefined) {
           res[current_index] = 1;
         } else {
           res[current_index] = res[current_index] + 1;
         }
      }
    }
  }
  return res;
  // throw new NotImplementedError('Not implemented');
}

module.exports = {
  getDNSStats
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  let catsNumber = 0;
  for (let yard of backyard) {
    catsNumber += yard.filter( i => i === '^^' ).length;
  }
  return catsNumber;
}

module.exports = {
  countCats
};

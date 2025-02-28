const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason(d) {
  if (d === undefined) return 'Unable to determine the time of year!';
  if (!(d.getTime)) throw new Error("Invalid date!");

  if (d.hasOwnProperty('toString')) throw new Error ("Invalid date!") ;
  
  if (Object.prototype.toString.call(d) === '[object Date]') {
    let month = d.getMonth();
  
    if ((0 <= month && month <= 1) || month === 11) {
      return 'winter';
    } else if ( 2 <= month && month <= 4 ) {
      return 'spring'
    } else if (5 <= month && month <= 7) {
      return 'summer'
    } else if ( 8 <= month && month <=10 ) {
      return "autumn"
    }
  } else if (d instanceof Date){
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};

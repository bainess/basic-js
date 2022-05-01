const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(diskNum, turnSpeed) {
  let answer = {
    turns: 0,
    seconds: 0,
  }  
  let movesNum = 2 ** diskNum -1;
    answer.turns = movesNum;

  let speed = Math.floor((60 * 60 * movesNum) / turnSpeed);
  answer.seconds = speed;
  return (answer);
}
module.exports = {
  calculateHanoi
};

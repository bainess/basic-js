const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  if (!(Array.isArray(members))) return false;

  let dreamTeamName = [];
  console.log(members)
  members.forEach(function(member){
    if (typeof member === 'string') {
      member = member.toUpperCase();
      for (let i=0; i < member.length; i++) {
        if (member[i] === ' ') continue;
        if (!(member[i] === ' ')) { 
          let letter = member[i];
          dreamTeamName.push(letter);          
        break;    }
    }

    }
  })
 return dreamTeamName.sort().join('');
}

module.exports = {
  createDreamTeam
};

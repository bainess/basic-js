const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  let flag = true;
  const array = [];
  arr.forEach((el)=> array.push(el));
  array.forEach((el, i, a)=> {
    
    if (el === "--discard-next") {
      flag = false;
      array.splice(i, 2);
      } 
    })
      array.forEach((el, i, a)=> { if (el === "--discard-prev" && i > 0 && flag) {
      array.splice(i-1, 2);
    } else if (el === "--discard-prev" && i > 0 && !flag) {
      array.splice(i, 1);
    } else if(el === "--discard-prev" && i === 0) {
      array.splice(i, 1 );
    } else if (el === "--double-next" && i !== array.length-1) {
      array.splice(i, 1, array[i+1]);
    } else if (el === "--double-next" && i === array.length-1) {
      array.splice(i,1);
    } else if (el === "--double-prev" && i > 0 && flag){
      console.log(i, array[i - 1])
      array.splice(i,1, array[i-1]);
    } else if (el === "--double-prev" && i === 0){
      array.splice(i,1);
    } else if (el === "--double-prev" && i > 0 && !flag ){
      array.splice(i,1); console.log(i); console.log(flag);
    }
  });
  
  return array;
};

module.exports = {
  transform
};

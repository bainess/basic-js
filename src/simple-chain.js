const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(arg) {
    this.chain.push(arg);
    return this;
  },
  removeLink(arg) {
    if (typeof arg !== 'number')  {
      this.chain = [];
      throw new Error ("You can\'t remove incorrect link!");
    }
    if (this.chain.length < arg || arg < 1) {
      this.chain = [];
      throw new Error ("You can\'t remove incorrect link!");
    } else {
      this.chain.splice(arg-1,1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let showResult = this.chain.map(el => `( ${el} )`).join('~~');
    this.chain = [];
    return showResult;
  }
};

module.exports = {
  chainMaker
};

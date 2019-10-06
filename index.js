const nLenNum = require('nlen-num');

module.exports = (length) => {
  return `${nLenNum(length)}-${nLenNum(length)}-${nLenNum(length)}`;
};

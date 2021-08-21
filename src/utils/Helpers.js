const Utils = require('./')

module.exports = [
  ['array', (...values) => Array.prototype.slice.call(values, 0, -1)],
  ['formattedText', Utils.formattedText],
  ['join', (array, separator) => array.join(separator)],
  ['JSONparse', (string) => JSON.parse(string)],
  ['slice', (array, start, end) => array.slice(start, end)],
  ['slicingText', Utils.slicingText]
]

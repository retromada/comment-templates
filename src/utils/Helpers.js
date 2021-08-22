const Utils = require('./')

module.exports = [
  ['array', (...values) => values.slice(0, -1)],
  ['formattedText', Utils.formattedText],
  ['join', (array, separator) => array.join(separator)],
  ['JSONparse', (string) => JSON.parse(string)],
  ['slice', (array, start, end) => array.slice(start, end)],
  ['slicingText', Utils.slicingText],
  ['templateLiterals', (...values) => values.slice(0, -1).join('')]
]

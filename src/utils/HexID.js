const { customAlphabet } = require('nanoid')
const { numbers } = require('nanoid-dictionary')

module.exports = customAlphabet(numbers + 'ABCDEF', 8)

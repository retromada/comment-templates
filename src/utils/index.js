const { TextFormats } = require('./Constants.js')

module.exports = class Utils {
  /**
   * Text Formatting Options
   * @typedef FormatTextOptions
   * @type {Object}
   * @property {boolean} [random] Randomize the informed formats
   * @property {boolean} [unique] Only one format to apply
   */

  /**
   * Add formatting to text
   * @param {string} text Text to be formatted
   * @param {string|string[]} formats Formats to be applied to text
   * @param {FormatTextOptions} [options] Options for text formatting
   * @returns {string}
   */
  static formattedText (text, formats, options) {
    if (!Array.isArray(formats)) formats = [formats]

    const formatTags = (format) => {
      if (format === TextFormats.NONE) return Array(2).fill('')

      const firstLetter = format.match(/^[^\*]/).shift()

      return [`[${firstLetter}]`, `[/${firstLetter}]`]
    }

    if (options?.random) formats = formats.shuffle()
    if (options?.unique) formats = formats.random()

    for (let index = 0; index < formats.length; index++) {
      const [initialize, terminate] = formatTags(formats[index])

      text = `${initialize}${text}${terminate}`
    }

    return text
  }

  /**
   * Slice a text into several lines
   * @param {string} text Text to be sliced
   * @param {number|number[]} numberOfLines Number of lines to define for new text
   * @returns {string[]}
   */
  static slicingText (text, numberOfLines) {
    const words = text.split(' ')
    const linesAmount = Array.isArray(numberOfLines) ? Math.between(...numberOfLines) : numberOfLines || 2
    const chunk = words.length / (Math.round(words.length / linesAmount) > 12 ? linesAmount + 2 : linesAmount)

    let lines = [], index, self

    for (index = 0, self = words.length; index < self; index += chunk) {
      lines.push(words.slice(index, index + chunk).join(' '))
    }

    return lines
  }
}

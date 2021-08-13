module.exports = class Utils {
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

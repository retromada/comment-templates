const { TextFormats } = require('../../utils/Constants.js')
const { formattedText } = require('../../utils')

module.exports = (ctx) => {
  return formattedText(
    ctx.text
      .split(' ')
      .map((word, index, self) =>
        word !== self.slice(-1).pop()
          ? `${word} ${ctx.unicode.emojis[index]}`
          : word
      )
      .join(' '),
    Object.values(TextFormats),
    { unique: true }
  )
}

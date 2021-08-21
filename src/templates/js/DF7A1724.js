const { TextFormats } = require('../../utils/Constants.js')
const { formattedText, slicingText } = require('../../utils')

module.exports = (ctx) => {
  const formats = Object.values(TextFormats)
  const format = formats.random()

  return slicingText(ctx.text, [4, 6])
    .map((line, index, self) =>
      [
        ctx.unicode.emojis
          .slice(
            index % 2 ? index * 1 + index : index * 2,
            index % 2 ? index * 2 + 2 : index * 2 + 2
          )
          .join(` ${ctx.unicode.symbol} `),
        `${line.length ? formattedText(line, format) : line}${
          index + 1 === self.length
            ? ` ${formattedText(
                `{${ctx.unicode.emojis.slice(-5).join('')}}`,
                formats,
                { unique: true }
              )}`
            : ''
        }`,
      ].join(' ')
    )
    .join('\n')
}

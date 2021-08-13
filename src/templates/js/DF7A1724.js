const { slicingText } = require('../../utils')

module.exports = (ctx) => {
  return slicingText(ctx.text, [4, 6])
    .map((line, index, self) =>
      [
        ctx.unicode.emojis
          .slice(index % 2 ? index * 1 + index : index * 2, index % 2 ? index * 2 + 2 : index * 2 + 2)
          .join(` ${ctx.unicode.symbol} `),
        `${line}${index + 1 === self.length ? ` {${ctx.unicode.emojis.slice(-5).join('')}}` : ''}`
      ].join(' ')
    )
    .join('\n')
}

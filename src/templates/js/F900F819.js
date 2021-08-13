module.exports = (ctx) => {
  return ctx.text
    .split(' ')
    .map((word, index, self) =>
      word !== self.slice(-1).pop() ? `${word} ${ctx.unicode.emojis[index]}` : word
    )
    .join(' ')
}

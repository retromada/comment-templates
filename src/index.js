const { readdirSync } = require('fs')
const { parse, resolve } = require('path')

const templatesPath = resolve(__dirname, 'templates')
const Templates = Object.assign(
  {},
  ...readdirSync(templatesPath)
    .filter((file) => !parse(file).ext)
    .map((folder) =>
      ({
        [folder]: readdirSync(resolve(templatesPath, folder))
          .map((template) => template.replace(/\.[^/.]+$/, ''))
      })
    )
)

Templates.toObject = () =>
  Object.assign(
    {},
    ...Object.entries(Templates)
      .slice(0, -1)
      .map(([key, value]) => ({
        [key]: Object.assign(
          {},
          ...value.map((template) => ({ [template]: false }))
        )
      }))
  )

module.exports = { Templates }

const { writeFileSync } = require('fs')
const { resolve } = require('path')

const HexID = require('./HexID.js')

const [, , extension] = process.argv

if (!/hbs|js/.test(extension)) return

const templatesPath = resolve(__dirname, '..', 'templates')
const writeTemplate = (filename, data) =>
  writeFileSync(resolve(templatesPath, extension, `${filename}.${extension}`), data)
const filename = () => {
  const id = HexID()
  return /^\d/.test(id) ? filename() : id
}

Object.create({
  hbs () {
    writeTemplate(filename(), '')
  },

  js () {
    writeTemplate(filename(), 'module.exports = (ctx) => {}\n')
  }
})[extension]()

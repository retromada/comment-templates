const { writeFileSync } = require('fs')
const { resolve } = require('path')

const HexID = require('./HexID.js')

writeFileSync(resolve(__dirname, '..', 'templates', `${HexID()}.hbs`), '\n')

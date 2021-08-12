const handlebars = require('handlebars')

const helpers = require('../utils/Helpers.js')

module.exports = class Handlebars {
  constructor () {
    Object.assign(this, handlebars)

    this.registerHelpers()
  }

  registerHelpers () {
    helpers.forEach((helper) => handlebars.registerHelper(...helper))
  }
}

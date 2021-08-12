const handlebars = require('handlebars')
require('handlebars-helpers')({ handlebars })

const helpers = require('../utils/Helpers.js')

module.exports = class Handlebars {
  constructor () {
    this.registerHelpers()
  }

  compile (template) {
    return handlebars.compile(template)
  }

  registerHelpers () {
    helpers.forEach((helper) => handlebars.registerHelper(...helper))
  }
}

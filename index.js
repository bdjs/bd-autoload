'use strict'

const path = require('path')
const fs = require('fs')

module.exports = function (name = 'apps') {
  let dirname = path.dirname(process.mainModule.filename)
  let appPath = path.join(dirname, name)
  if (fs.existsSync(appPath)) {
    let dirs = fs.readdirSync(appPath)
    let apps = {}
    dirs.forEach(value => {
      if (value.indexOf('.') !== 0) {
        apps[value] = path.join(dirname, name, value)
      }
    })
    return apps
  } else {
    return []
  }
}

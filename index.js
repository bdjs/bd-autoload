const path = require('path')
const fs = require('fs')

module.exports = (name = 'apps') => {
  const dirname = path.dirname(process.mainModule.filename)
  const appPath = path.join(dirname, name)
  if (fs.existsSync(appPath)) {
    const dirs = fs.readdirSync(appPath)
    const apps = {}
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

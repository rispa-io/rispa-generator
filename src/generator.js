require('babel-register')

const createPlop = require('node-plop')
const { optionalRequire } = require('./utils/require')
const configureBaseGenerators = require('./generators')

const configureGenerators = (distPath = process.cwd(), generatorsPaths = []) => {
  const plop = createPlop()

  plop.containsGenerator = generatorName =>
    plop.getGeneratorList()
      .some(({ name }) => name === generatorName)

  configureBaseGenerators(plop, distPath)

  generatorsPaths
    .map(optionalRequire)
    .filter(Boolean)
    .map(configure => {
      configure(plop)
      return configure
    })
    .map(configure => configure.post && configure.post(plop))

  return plop
}

module.exports = configureGenerators

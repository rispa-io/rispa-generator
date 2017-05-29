const createPlop = require('node-plop')

const { optionalRequire } = require('./utils/require')
const configureBaseGenerators = require('./generators')

const configureGenerators = (distPath = process.cwd(), generatorsPaths = []) => {
  const plop = createPlop()

  plop.containsGenerator = generatorName => plop.getGeneratorList().some(({ name }) => name === generatorName)

  configureBaseGenerators(plop, distPath)

  generatorsPaths
    .filter((generatorPath, idx) => generatorsPaths.indexOf(generatorPath) === idx)
    .map(optionalRequire)
    .filter(configurePluginGenerators => configurePluginGenerators)
    .forEach(configurePluginGenerators => configurePluginGenerators(plop, distPath))

  return plop
}

module.exports = configureGenerators

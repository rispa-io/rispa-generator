const createPlop = require('node-plop')

const { optionalRequire } = require('./utils/require')

const createBaseGenerators = require('./generators')

module.exports = (generatorsPaths = [], distPath = process.cwd()) => {
  const plop = createPlop()

  createBaseGenerators(plop, distPath)

  generatorsPaths
    .filter((generatorPath, idx) => generatorsPaths.indexOf(generatorPath) === idx)
    .map(optionalRequire)
    .filter(generators => generators)
    .forEach(setGenerators => setGenerators(plop, distPath))

  return plop
}

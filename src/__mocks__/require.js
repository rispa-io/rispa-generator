const mockRequire = jest.genMockFromModule('../utils/require')

let mockModules = {}

mockRequire.optionalRequire = id => {
  const mockModule = mockModules[id]
  if (mockModule) {
    return mockModule
  }
  return null
}

mockRequire.setMockModules = newMockModules => { mockModules = Object.assign({}, newMockModules) }

module.exports = mockRequire

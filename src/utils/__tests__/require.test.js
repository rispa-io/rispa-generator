jest.resetAllMocks()

const { optionalRequire } = require.requireActual('../require')

describe('require utils', () => {
  it('should optional require return module', () => {
    expect(optionalRequire('../../package.json')).toHaveProperty('name', '@rispa/generator')
  })

  it('should optional require return null', () => {
    expect(optionalRequire('./invalid/module')).toBeNull()
  })
})

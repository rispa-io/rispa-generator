jest.resetAllMocks()
jest.mock('../utils/require', () => require.requireActual('../__mocks__/require'))

const mockRequire = require.requireMock('../utils/require')

const configureGenerator = require.requireActual('../generator')

describe('configure generator', () => {
  const projectPath = '/sample/path/'
  const generatorsPaths = [`${projectPath}/packages/core/.rispa/generators/index.js`]

  afterAll(() => {
    mockRequire.setMockModules({})
  })

  it('should success configure generator', () => {
    const generatorsPostFunc = jest.fn()
    const generatorsFunc = Object.assign(jest.fn(), {
      post: generatorsPostFunc,
    })

    mockRequire.setMockModules(generatorsPaths.reduce((modules, generatorsPath) => {
      modules[generatorsPath] = generatorsFunc
      return modules
    }, {}))

    const generator = configureGenerator(projectPath, generatorsPaths)

    expect(generator.containsGenerator('project')).toBe(true)

    expect(generatorsFunc).toBeCalled()
    expect(generatorsPostFunc).toBeCalled()
  })

  it('should success configure generator with default', () => {
    mockRequire.setMockModules({})

    const generator = configureGenerator()

    expect(generator.containsGenerator('project')).toBe(true)
  })
})

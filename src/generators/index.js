const createProject = require('./project')

module.exports = (plop, distPath) => {
  plop.setGenerator('project', createProject(distPath))
}

const path = require('path')

module.exports = distPath => ({
  description: 'Generator for project structure',
  prompts: [],
  actions: () => ([
    {
      type: 'add',
      path: './.editorconfig',
      templateFile: './.editorconfig.hbs',
      abortOnFail: false,
    },
    {
      type: 'add',
      path: './.gitignore',
      templateFile: './.gitignore.hbs',
      abortOnFail: false,
    },
    {
      type: 'add',
      path: './.travis.yml',
      templateFile: './.travis.yml.hbs',
      abortOnFail: false,
    },
    {
      type: 'add',
      path: './package.json',
      templateFile: './package.json.hbs',
      abortOnFail: true,
    },
  ].map(item => {
    item.templateFile = path.resolve(__dirname, item.templateFile)
    item.path = path.resolve(distPath, item.path)
    return item
  })),
})

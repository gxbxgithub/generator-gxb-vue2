const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname
      }
    ]).then(answers => {
      this.answers = answers
    })
  }

  writing() {
    // 把每一个文件都通过模板转换到目标路径
    const templates = [
      '.gitignore',
      'babel.config.js',
      'package.json',
      'README.md',
      'vue.config.js',
      'public/favicon.ico',
      'public/index.html',
      'src/assets/logo.png',
      'src/components/HelloWorld.vue',
      'src/router/index.js',
      'src/store/index.js',
      'src/views/About.vue',
      'src/views/Home.vue',
      'src/App.vue',
      'src/main.js'
    ]

    templates.forEach(item => {
      this.fs.copyTpl(this.templatePath(item), this.destinationPath(item), this.answers)
    })
  }
}
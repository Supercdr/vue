const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 设置入口文件
  pages: {
    index: {
      entry: 'src/main.js'
    }
  },
  // 关闭语法检查
  lintOnSave: false
})

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
  lintOnSave: false,
  // 开启单个代理服务器 向跨域服务器发送请求 更改之后必须重启本端口
  // devServer: {
  //   proxy: 'http://localhost:8888'
  // },
  // 开启多个代理服务器 
  devServer: {
    //注意，要在proxy中配置代理服务器
    proxy:{
      '/hello': {
        target: 'http://localhost:8888',  //请求的基础路径
        pathRewrite: { '^/hello': '' },  //重写路径，去除前缀api
        // ws:true,  //用于支持websocket
        // changeOrigin:true  //用于更换端口号
      },
      // 第二个代理服务器
      // '/api2':{
      //   target:'http://localhost:5000',
      //   pathRewrite:{'^/api2':''},
      //   ws:true,  
      //   changeOrigin:true
      // },
    }
  }
})

/* 
  代理解决跨域方式1
    * 【优点】可以代理多个地址
    * 【缺点】配置繁琐，前端请求时必须在请求地址前加前缀如下面的‘/api1’
 */
const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    //遇上/api1前缀的请求，就会触发该代理配置
    proxy('/api1', {
      target: 'http://localhost:5000', //请求转发给谁
      changeOrigin: true, //控制服务器收到的请求头中的Host的值
      pathRewrite: { '^/api1': '' }, //重写请求路径
    }),
    proxy('/api2', {
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite: { '^/api2': '' },
    })
  )
}
/* 
代理解决跨域方式2：
  * 【缺点】该方法只能实现代理一个地址无法代理多个
  * 【实现】在package.json文件的最后添加：
     `"proxy":"http://localhost:5000"`
*/

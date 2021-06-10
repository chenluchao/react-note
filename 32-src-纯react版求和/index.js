import React from 'react'
import ReactDOM from 'react-dom'
//引入路由器
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
reportWebVitals()
/* 
  BrowserRouter与HashRouter区别
      1、底层原理不一样
          BrowserRouter使用的是H5的history API,不兼容IE9及以下版本
          HashRouter使用的是URL的哈希值
      2、path表现形式不一样
          BrowserRouter的路径中没有#，例如：http://localhost:3000/demo/list
          HashRouter的路径中包含#，例如：http://localhost:3000/#/demo/list
      3、刷新后对路由state参数的影响
          1）BrowserRouter没有任何影响，因为state保存在history对象中
          2）HashRouter刷新后会导致路由中state参数丢失
      4、备注HashRouter可以解决一些路径错误相关的问题。如：前面的6-src-多级路径样式丢失问题
*/

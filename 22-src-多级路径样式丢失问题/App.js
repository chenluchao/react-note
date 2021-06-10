import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'
import './app.less'
export default class App extends Component {
  /* 
    解决多级路径刷新页面样式丢失问题
      1、publish/index.html中引入样式时不写 ./ 写 / (常用)
      2、publish/index.html中引入样式时不写 ./ 写 %PUBLISH_URL% (常用)
      3、不使用BrowserRouter使用HashRouter
  */
  render() {
    return (
      <div className="app">
        <Header />
        <div className="Main">
          <div className="Nav l">
            <MyNavLink to="/test/about">About</MyNavLink>
            <MyNavLink to="/test/home" children="Home" />
          </div>
          <div className="Content r">
            <Switch>
              <Route path="/test/about" component={About} />
              <Route path="/test/home" component={Home} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

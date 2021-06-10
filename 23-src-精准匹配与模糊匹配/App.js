import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'
import './app.less'
export default class App extends Component {
  /* 
    模糊匹配
      Route要的东西一个都不能少但是可以多给就可以匹配到。
      且必须要从开头匹配若一开始匹配不到这匹配结果为失败
    精准匹配
      必须要完全一致：给Route添加exact={true}或exact
    注意：
      严格匹配不要随意开启，需要时再开启，有些时候开启会导致无法匹配二级路由问题
  */
  render() {
    return (
      <div className="app">
        <Header />
        <div className="Main">
          <div className="Nav l">
            <MyNavLink to="/about">About</MyNavLink>
            <MyNavLink to="/home" children="Home" />
          </div>
          <div className="Content r">
            <Switch>
              <Route exact path="/about" component={About} />
              <Route exact path="/home" component={Home} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'
import './app.less'
export default class App extends Component {
  /* 
    当路由匹配到一个时仍然会继续匹配，会将所有匹配成功的路由组件渲染到组件。
    这样每次点击路由切换时都会对所有的路由进行一次匹配，效率太低。
    使用Switch会让路由匹配到一个时不再继续匹配。提高了效率。
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
              <Route path="/about" component={About} />
              <Route path="/home" component={Home} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

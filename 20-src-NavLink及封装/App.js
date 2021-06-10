import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'
import './app.less'
export default class App extends Component {
  /* 
    路由组件与一般组件
    1、写法不同
        一般组件：<Header />
        路由组件：<Route path="/about" component={About} />
    2、存放位置不同：
        一般组件：components
        路由组件：pages
    3、接受到的props不同
        一般组件：写标签时传递什么就接受到什么
        路由组件：
            history:
                go: ƒ go(n)
                goBack: ƒ goBack()
                goForward: ƒ goForward()
                push: ƒ push(path, state)
                replace: ƒ replace(path, state)
            location:
                pathname: "/about"
                search: ""
                state: undefined
            match:
                params: {}
                path: "/about"
                url: "/about"
  */
  render() {
    return (
      <div className="app">
        <Header />
        <div className="Main">
          <div className="Nav l">
            {/* 
              标签体也是特殊的属性也通过props中的children属性传递给子组件
              并且在子组件中通过规定children属性值可以给标签添加标签体 
            */}
            <MyNavLink to="/about">About</MyNavLink>
            <MyNavLink to="/home" children="Home" />
          </div>
          <div className="Content r">
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
          </div>
        </div>
      </div>
    )
  }
}

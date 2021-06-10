import React, { Component, Suspense,lazy } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
// import About from './pages/About'
// import Home from './pages/Home'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'
import Loading from './components/Loading'
import './app.less'
const About = lazy(()=>import('./pages/About'))
const Home = lazy(()=>import('./pages/Home'))
export default class App extends Component {
  /* 
    Redirect的使用
      1、一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
      2、具体编码：
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/home" component={Home} />
          <Redirect to='/home'/>
        </Switch>
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
            <Suspense fallback={<Loading/>}>
              <Switch>
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
              </Switch>
            </Suspense>
          </div>
        </div>
      </div>
    )
  }
}

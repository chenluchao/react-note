import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import './app.less'
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>React Router Demo</h1>
        <div className="Main">
          <div className="Nav l">
            {/* 编写路由链接 */}
            <div>
              <Link to="/about">About</Link>
            </div>
            <div>
              <Link to="/home">Home</Link>
            </div>
          </div>
          <div className="Content r">
            {/* 注册路由 */}
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
          </div>
        </div>
      </div>
    )
  }
}

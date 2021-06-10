import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'
import './app.less'
export default class App extends Component {
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
              <Redirect to='/about'/>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import './app.less'
import List from './components/List'
import Header from './components/Header'
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header></Header>
        <List></List>
      </div>
    )
  }
}

import React, { Component } from 'react'
import store from './redux/store'
import Count from './components/Count'
export default class App extends Component {
  componentDidMount(){
    store.subscribe(()=>{
      this.setState({})
    })
  }
  render() {
    return (
      <div className="app">
        <Count></Count>
      </div>
    )
  }
}


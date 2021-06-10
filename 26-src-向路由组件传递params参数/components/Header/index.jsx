import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    console.log('Header收到的props',this.props)
    return (
      <div>
        <h1>React Router Demo</h1>
      </div>
    )
  }
}

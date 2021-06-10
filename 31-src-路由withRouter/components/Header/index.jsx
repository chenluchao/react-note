import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
class Header extends Component {
  back = () => {
    this.props.history.goBack()
  }
  forword = () => {
    this.props.history.goForward()
  }
  render() {
    console.log('Header收到的props', this.props)
    return (
      <div>
        <h1>React Router Demo</h1>
        <button onClick={this.back}>回退</button>
        <button onClick={this.forword}>前进</button>
      </div>
    )
  }
}
/* 
  withRouter可以加工一般组件，让一般组件具有组件所特有的API
  withRouter的返回值是一个新组件
*/
export default withRouter(Header)
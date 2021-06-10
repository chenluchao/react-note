import React, { Component } from 'react'
import './index.less'
export default class Count extends Component {
  state = {
    count: 0,
  }
  //+
  increment = () => {
    const { value } = this.selectNumber
    const { count } = this.state
    this.setState({
      count: count + value * 1,
    })
  }
  //-
  decrement = () => {
    const { value } = this.selectNumber
    const { count } = this.state
    this.setState({
      count: count - value * 1,
    })
  }
  //奇数加
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    const { count } = this.state
    if (count % 2 !== 0) {
      this.setState({
        count: count + value * 1,
      })
    }
  }
  //异步加
  incrementAsync = () => {
    const { value } = this.selectNumber
    const { count } = this.state
    setTimeout(() => {
      this.setState({
        count: count + value * 1,
      })
    }, 500)
  }
  render() {
    return (
      <div className="count">
        <h1>当前秋和为：{this.state.count}</h1>
        <select ref={(c) => (this.selectNumber = c)}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>当前和为寄数再加</button>
        <button onClick={this.incrementAsync}>异步加操作</button>
      </div>
    )
  }
}

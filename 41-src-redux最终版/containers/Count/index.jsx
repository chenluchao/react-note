import React, { Component } from 'react'
import { increment, decrement, incrementAsync } from '../../redux/actions/count'
// 引入connect用于连接UI组件和redux
import { connect } from 'react-redux'
import './index.less'

// 定义UI组件
class Count extends Component {
  //+
  increment = () => {
    const { value } = this.selectNumber
    console.log(this.props)
    this.props.increment(value * 1)
  }
  //-
  decrement = () => {
    const { value } = this.selectNumber
    this.props.decrement(value * 1)
  }
  //奇数加
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    if (this.props.count % 2 !== 0) {
      this.props.increment(value * 1)
    }
  }
  //异步加
  incrementAsync = () => {
    const { value } = this.selectNumber
    this.props.incrementAsync(value * 1, 500)
  }
  render() {
    return (
      <div className="count">
        <h1>Count组件</h1>
        <h3>
          当前求和为：{this.props.count}，——下方人数为
          {this.props.persons.length}
        </h3>
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
// 容器组件
export default connect(
  (state) => ({ count: state.count, persons: state.persons }),
  {
    increment,
    decrement,
    incrementAsync,
  }
)(Count)

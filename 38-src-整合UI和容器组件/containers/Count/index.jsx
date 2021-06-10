import React, { Component } from 'react'
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from '../../redux/count_action'
// 引入connect用于连接UI组件和redux
import { connect } from 'react-redux'
import './index.less'

// 定义UI组件
class Count extends Component {
  //+
  increment = () => {
    const { value } = this.selectNumber
    this.props.jia(value * 1)
  }
  //-
  decrement = () => {
    const { value } = this.selectNumber
    this.props.jian(value * 1)
  }
  //奇数加
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    if (this.props.count % 2 !== 0) {
      this.props.jia(value * 1)
    }
  }
  //异步加
  incrementAsync = () => {
    const { value } = this.selectNumber
    this.props.jiaAsync(value * 1, 500)
  }
  render() {
    return (
      <div className="count">
        <h1>当前秋和为：{this.props.count}</h1>
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
  (state) => ({ count: state }), 
  {
    jia: createIncrementAction,
    jian: createDecrementAction,
    jiaAsync: createIncrementAsyncAction,
  }
)(Count)
/* 
  react-redux优化：
    1）容器组件和UI组件整合一个文件。
    2）无需自己给容器组件传递store，给<app/>包裹一个<Provider store={store}>即可。
    3）使用了react-redux后也不用自己再检测redux中状态的变化了，容器组件可以自动完成这个工作。
    4）mapDispatchToProps也可以简单的写成一个对象
    5)一个组件要和redux‘打交道’要经过几步
        1、定义好UI组件——不暴露
        2、引入connect生成一个容器组件，并暴露，写法如下：
            CONNECT(
              state=>({key:value}),
              {
                key:xxxAction,
                key:xxxAction
              }
            )(UI组件)
        3、在UI组件中通过this.props.xxxx读取和操作状态
*/
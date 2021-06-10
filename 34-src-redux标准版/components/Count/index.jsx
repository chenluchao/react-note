import React, { Component } from 'react'
// 引入store用于获取store中的数据
import store from '../../redux/store'
// 引入actionCreator，专门用于创建action对象
import {
  createIncrementAction,
  createDecrementAction,
} from '../../redux/count_action'
import './index.less'
export default class Count extends Component {
  // componentDidMount(){
  //   // 检测redux中状态的变化，只要变化就调用render
  //   store.subscribe(()=>{
  //     this.setState({})
  //   })
  // }

  //+
  increment = () => {
    const { value } = this.selectNumber
    store.dispatch(createIncrementAction(value * 1))
  }
  //-
  decrement = () => {
    const { value } = this.selectNumber
    store.dispatch(createDecrementAction(value * 1))
  }
  //奇数加
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    const count = store.getState()
    if (count % 2 !== 0) {
      store.dispatch(createIncrementAction(value * 1))
    }
  }
  //异步加
  incrementAsync = () => {
    const { value } = this.selectNumber
    setTimeout(() => {
      store.dispatch(createIncrementAction(value * 1))
    }, 500)
  }
  render() {
    return (
      <div className="count">
        <h1>当前求和为：{store.getState()}</h1>
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

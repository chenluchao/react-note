import React, { Component } from 'react'
import './index.less'

export default class Parent extends Component {
  state = {
    list:[{name:'张三',age:13},{name:'李四',age:14}],
    // list:'aaa',
    hasError:''
  }
  // 当Parent组件的子组件出现错误时，会触发getDerivedStateFromError调用，并携带错误信息
  static getDerivedStateFromError(error){
    console.log(error)
    return {hasError:error}
  }
  componentDidCatch(){
    console.log('组件渲染时出错，发送请求报告后端')
  }
  render() {
    return (
      <div className="parent">
        <h3>我是Parent组件</h3>
        {this.state.hasError?<h6>出错啦</h6>:<Child list={this.state.list}></Child>}
      </div>
    )
  }
}

class Child extends Component {
  render() {
    const {list} = this.props
    return (
      <div className="child">
        <h4>我是child组件</h4>
        <ul>
          {
            list.map((item,index)=>{
              return (
              <li key={index}>{item.name}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
/* 
  错误边界
      错误边界(Error boundary):用来捕获后代组件错误，渲染出备用页面
    特点
      只能捕获后代组件生命周期产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件，定时器中产生的错误
    使用方法
      getDerivedStateFromError配合componentDidCatch
*/

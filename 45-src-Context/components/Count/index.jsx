import React, { Component } from 'react'
import './index.less'
// 创建Context对象
const MyConText = React.createContext()
const { Provider,Consumer } = MyConText
export default class A extends Component {
  state = {
    username: 'tom',
  }
  render() {
    return (
      <div className="parent">
        <h3>我是A组件</h3>
        <h4>我的用户名是{this.state.username}</h4>
        <Provider value={{username:this.state.username,age:13}}>
          <B></B>
        </Provider>
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className="child">
        <h3>我是B组件</h3>
        <h4>我从A组件收到的用户名是？？？</h4>
        <C></C>
      </div>
    )
  }
}

class C extends Component {
  // 声明接收context
  static contextType = MyConText
  render() {
    return (
      <div className="grand">
        <h3>我是C组件</h3>
        {/* <h4>我从B组件收到的用户名是：{this.context.username}-{this.context.age}</h4> */}
        <Consumer>
          {
            value=>{
              // return `${value.username},年龄是${value.age}`
              return (
              <span>{value.username}-{value.age}</span>
              )
            }
          }
        </Consumer>
      </div>
    )
  }
}
/* 
  Context：
    1、一种组件通信方式常用于【祖组件】于【后代组件】间通讯
    2、使用：
          1）创建Context容器对象
             const MyConText = React.createContext()
          2）渲染子组件时，外面位置xxxCOntext.Provider,通过value属性给后代组件传递数据；
              <xxxContext.Provider value={{username:'as'.username,age:13}}>
                子组件
              </xxxContext.Provider>
          3）后代组件接收数据
              // 第一种：仅适用于类组件
                    static contextType = xxxContext //声明接收context
                    this,context.username //读取context中的value的值
              // 第二种：适用于类组件和函数组件
                    <xxxContext.Consumer>
                      {
                        value=>{//value是context中的value传递过来的值
                          return (//要显示的内容
                            <span>{value.username}</span>
                          )
                        }
                      }
                    </xxxContext.Consumer>
*/
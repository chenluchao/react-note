import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import Detail from './Detail'
export default class Message extends Component {
  state = {
    messageArr: [
      { id: 1, title: '消息1' },
      { id: 2, title: '消息2' },
      { id: 3, title: '消息3' },
    ],
  }
  render() {
    /* 
      params参数
        路由链接（携带参数）：<Link to='/home/message/detail/18'>详情</Link>
        注册路由(声明接收)：<Route path='/home/message/detail/:id' component={Detail}></Route>
        接收参数：const {id} = this.props.match.params
    */
    return (
      <div>
        <ul style={{marginBottom:'30px'}}>
          {this.state.messageArr.map((item) => {
            return (
              <li key={item.id}>
                {/* 向路由组件传递params参数 */}
                <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link>
              </li>
            )
          })}
        </ul>
        {/* 生命接受params参数 */}
        <Route path='/home/message/detail/:id/:title' component={Detail}></Route>
      </div>
    )
  }
}

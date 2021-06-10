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
      search参数
        路由链接（携带参数）：<Link to={`/home/message/detail/?id=1&title=xxx`}>详情</Link>
        注册路由（无需声明接收的参数，正常声明即可）：<Route path='/home/message/detail' component={Detail}></Route>
        接收参数：const {search} = this.props.location
        备注：收到的search是urlencoded编码字符串，需要借助querystring解析
      */
    return (
      <div>
        <ul style={{marginBottom:'30px'}}>
          {this.state.messageArr.map((item) => {
            return (
              <li key={item.id}>
                {/* 向路由组件传递params参数 */}
                {/* <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link> */}
                {/* 向路由组件传递search参数 */}
                <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link>
              </li>
            )
          })}
        </ul>
        {/* 生命接受params参数 */}
        {/* <Route path='/home/message/detail/:id/:title' component={Detail}></Route> */}
        {/* 生命接受search参数-无需声明接收正常声明路由即可 */}
        <Route path='/home/message/detail' component={Detail}></Route>
      </div>
    )
  }
}

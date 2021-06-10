import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'
export default class Message extends Component {
  state = {
    messageArr: [
      { id: 1, title: '消息1' },
      { id: 2, title: '消息2' },
      { id: 3, title: '消息3' },
    ],
  }
  replaceShow = (id, title) => {
    // replace路由跳转+携带params参数
    // this.props.history.replace(`/home/message/detail/${id}/${title}`)
    // replace路由跳转+携带search参数
    // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)
    // replace路由跳转+携带state参数
    this.props.history.replace(`/home/message/detail`,{id,title})
  }
  pushShow = (id, title) => {
    // push路由跳转+携带params参数
    // this.props.history.push(`/home/message/detail/${id}/${title}`)
    // push路由跳转+携带search参数
    // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)
    // push路由跳转+携带state参数
    this.props.history.push(`/home/message/detail`,{id,title})
  }
  render() {
    return (
      <div>
        <ul style={{ marginBottom: '30px' }}>
          {this.state.messageArr.map((item) => {
            return (
              <li key={item.id}>
                {/* params */}
                {/* <Link to={`/home/message/detail/${item.id}/${item.title}`}>
                  {item.title}
                </Link> */}
                {/* search */}
                {/* <Link to={`/home/message/detail?id=${item.id}&title=${item.title}`}>
                  {item.title}
                </Link> */}
                {/* state */}
                <Link to={{pathname:`/home/message/detail`,state:{id:item.id,title:item.title}}}>
                  {item.title}
                </Link>
                <button onClick={() => this.pushShow(item.id, item.title)} style={{ margin: '0 10px' }}>push查看</button>
                <button onClick={() => this.replaceShow(item.id, item.title)}>
                  replace查看
                </button>
              </li>
            )
          })}
        </ul>
        {/* 生命接受params参数-无需声明接收正常声明路由即可 */}
        {/* <Route
          path="/home/message/detail/:id/:title"
          component={Detail}
        ></Route> */}
        {/* 生命接受search参数-无需声明接收正常声明路由即可 */}
        {/* <Route
          path="/home/message/detail"
          component={Detail}
        ></Route> */}
        {/* 生命接受state参数-无需声明接收正常声明路由即可 */}
        <Route
          path="/home/message/detail"
          component={Detail}
        ></Route>
      </div>
    )
  }
}

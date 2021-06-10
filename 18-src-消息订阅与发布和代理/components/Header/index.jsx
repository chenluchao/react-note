import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.less'
export default class index extends Component {
  dealAdd = (event) => {
    if(event.target.value.trim()===''||event.keyCode!==13) return
    const item = {
      id:Math.random()*10,
      title:event.target.value
    }
    // 发布消息
    PubSub.publish('MyMessage',item)
    event.target.value = ''
  }
  render() {
    return (
      <div className="header">
        <input
          type="text"
          placeholder="请输入事项，按回车录入"
          onKeyUp={this.dealAdd}
        />
      </div>
    )
  }
}

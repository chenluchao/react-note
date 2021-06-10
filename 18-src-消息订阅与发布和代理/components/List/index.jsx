import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.less'
export default class index extends Component {
  state = {
    list: [
      { id: 1, title: '吃饭' },
      { id: 2, title: '睡觉' },
      { id: 3, title: '玩游戏' },
    ],
  }
  componentDidMount(){
    this.token = PubSub.subscribe('MyMessage',(_,data)=>{
      console.log('收到订阅信息：',data)
      const {list} = this.state
      this.setState({
        list:[data,...list]
      })
    })
  }
  componentWillUnmount(){
    PubSub.unsubscribe(this.token)
  }
  render() {
    const { list } = this.state
    return (
      <div className='list'>
        {list.map((item) => {
          return <div className='item' key={item.id}>{item.title}</div>
        })}
      </div>
    )
  }
}

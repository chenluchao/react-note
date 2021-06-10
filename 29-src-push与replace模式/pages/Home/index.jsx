import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Message from './Message'
import News from './News'
import MyNavLink from '../../components/MyNavLink'
import './index.less'
export default class Home extends Component {
  render() {
    return (
      <div>
        Home组件内容
        <div className='ChildNav clear'>
          <MyNavLink to='/home/news'>News</MyNavLink>
          <MyNavLink to='/home/message'>Message</MyNavLink>
        </div>
        <div className='ChildBox'>
          {/* 注册路由 */}
          <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/message" component={Message} />
            <Redirect to='/home/news'/>
          </Switch>
        </div>
      </div>
    )
  }
}

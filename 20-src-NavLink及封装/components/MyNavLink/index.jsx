import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class MyNavLink extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {/* 
          标签体也是特殊的属性也通过props中的children属性传递给子组件
          并且在子组件中通过规定children属性值可以给标签添加标签体 
          <NavLink>是<Link> 的一个特定版本, 会在匹配上当前 URL 的时候会给已经渲染的元素添加样式参数activeClassName
        */}
        {/* <NavLink activeClassName='active' {...this.props}>{this.props.children}</NavLink> */}
        <NavLink activeClassName='active' {...this.props}/>
      </div>
    )
  }
}

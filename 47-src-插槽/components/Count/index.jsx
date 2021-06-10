import React, { PureComponent, Component } from 'react'
import './index.less'

export default class Parent extends Component {
  render() {
    return (
      <div className="parent">
        <h3>我是Parent组件</h3>
        {/* children props */}
        {/* <A><B/></A> */}
        {/* render props */}
        <A render={(name)=><B name={name}/>}/>
        {/* <A render={()=>{}}/> */}
      </div>
    )
  }
}

class A extends Component {
  state = { name: 'tom' }
  render() {
    return (
      <div className="child">
        <span>我是A组件</span>
        {/* children props */}
        {/* {this.props.children} */}
        {/* render props */}
        {this.props.render(this.state.name)}
      </div>
    )
  }
}
class B extends PureComponent {
  render() {
    return (
      <div className="grand">
        <span>我是B组件</span>
        <br></br>
        收到A组件传来的数据：{this.props.name}
      </div>
    )
  }
}
/* 
  类似于Vue的插槽
*/

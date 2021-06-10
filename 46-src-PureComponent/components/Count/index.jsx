import React, { PureComponent } from 'react'
import './index.less'
export default class Parent extends PureComponent {
  state = {
    carName: '奔驰c63',
  }
  change = () => {
    // this.setState({
    //   carName:'迈巴赫'
    // })
    this.setState({})
  }
  // shouldComponentUpdate(nextProps,nextState){
  //   console.log('parent目前的props,state')
  //   console.log(this.props,this.state)
  //   console.log('parent下一个的props,state')
  //   console.log(nextProps,nextState)
  //   if(this.state.carName === nextState.carName){
  //     return false
  //   }else{
  //     return true
  //   }
  // }
  render() {
    const {carName} = this.state
    console.log('---parent------')
    return (
      <div className="parent">
        <h3>我是Parent组件</h3>
        <span>我有一辆{carName}</span>
        <hr/>
        <button onClick={this.change}>点击换车</button>
        <Child carName='奥拓'></Child>
      </div>
    )
  }
}

class Child extends PureComponent {
  // shouldComponentUpdate(nextProps,nextState){
  //   console.log('child目前的props')
  //   console.log(this.props)
  //   console.log('child下一个的props')
  //   console.log(nextProps)
  //   return true
  //   // if(this.state.carName === nextState.carName){
  //   //   return false
  //   // }else{
  //   //   return true
  //   // }
  // }
  render() {
    console.log('---child------')
    return (
      <div className="child">
        {/* <span>我收到的数据是{this.props.carName}</span> */}
        <h3>我是Child组件</h3>
      </div>
    )
  }
}
/* 
  不合理：
    1、只要调用setState就调用render
    2、只当前组件重新render，就会自动重新render子组件，几遍子组件没有用父组件的数据--效率低
  原因：
    component中的shouldComponentUpdate总是返回true

  效率高的做法
    只有当组件的state或props数据发生改变时才重新render
  解决：
    方法1、
      重写shouldComponentUpdate()方法
          比较新旧state和props数据，如果有变化才返回true，如果咩有返回false
    办法2、
      使用PureComponent
          PureComponent重写了shouldComponentUpdate()，只有state或者props数据变化才返回true
          注意：
              只是进行state和props数据的浅对比，如果只是数据对象内部数据变了，这返回false
              不要直接修改state数据，而是要产生新的数据
    项目中一般使用PureComponent来优化
*/
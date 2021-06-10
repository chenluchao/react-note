import React, { useState, useEffect,useRef,Fragment } from 'react'
import ReactDOM from 'react-dom'
export default function Count() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('张三')
  const MyRef = useRef()
  useEffect(() => {
    let timer = setInterval(() => {
      setCount((count) => count + 1)
    }, 1000)
    return ()=>{
      clearInterval(timer)
    }
  }, [])
  // 加1
  function add() {
    setCount(count + 1)
  }
  // 修改名字
  function change() {
    setName('李四')
  }
  // 卸载组件回调
  function unMount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  // 提示输入信息
  function show(){
    console.log(MyRef.current.value)
  }

  return (
    <Fragment>
      <input type="text" ref={MyRef}/>
      <h2>当前求和为:{count}</h2>
      <h3>名字为：{name}</h3>
      <button onClick={add}>点击+1</button>
      <button onClick={change}>点击改名</button>
      <button onClick={unMount}>卸载组件</button>
      <button onClick={show}>提示输入信息</button>
    </Fragment>
  )
}
/* 
  <Fragment></Fragment>标签react在渲染时会将这个标签去除同时可以添加key属性
  <></>空标签react在渲染时会将这个标签去除但是不能添加key属性
*/

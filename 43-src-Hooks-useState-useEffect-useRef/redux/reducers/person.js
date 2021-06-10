/* 
  该文件是用于创建一个为Count组件服务的reducer,reducer的本质是一个函数
  reducer函数会接到两个参数，分别为：之前的状态（preState）；动作对象象（action）
*/
import { ADD_PERSON } from '../constant'
const initState = [{ id: '1', name: '张三', age: 13 }]
export default function personReducer(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case ADD_PERSON://添加一个人
      return [data, ...preState]
    default:
      return preState
  }
}
/* 
  纯函数
      1、一类特别的函数，只要是同样的输入（实参），必定得到同样的输出（返回）。
      2、必须遵守以下约束：
          1）不得改写参数数据
          2）不会产生任何副作用，例如网络请求，输入输出设备
          3）不能调用Date.now()或者Math.random()等不纯的方法
      3、redux的reducer必须是一个纯函数
*/

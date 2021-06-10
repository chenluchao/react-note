/* 
  该文件专门为count组件生成action对象
  action:有两种格式Object和function
    1、Object:同步action
    2、function:异步action
    备注：如果是异步action则需要安装中间件：`yarn add redux-thunk`
*/
import { INCREMENT, DECREMENT } from './constant'
// 同步action
export const createIncrementAction = (data) => ({ type: INCREMENT, data })
export const createDecrementAction = (data) => ({ type: DECREMENT, data })
// 异步action，就是指action的值是函数。异步action中一般都要调用同步action。异步action不是必须要用的
export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(()=>{
      dispatch(createIncrementAction(data))
    },time)
  }
}

/* 
  改文件是用于创建一个为Count组件服务的reducer,reducer的本质是一个函数
  reducer函数会接到两个参数，分别为：之前的状态（preState）；动作对象象（action）
*/
const initState = 0
export default function countReducer(preState = initState, action) {
  // 从action对象中获取type及data
  const { type, data } = action
  // 根据type决定如何加工数据
  switch (type) {
    case 'increment': // 如果是+
      return preState + data
    case 'decrement': //如果是-
      return preState - data
    default:
      //初始化
      return preState
  }
}

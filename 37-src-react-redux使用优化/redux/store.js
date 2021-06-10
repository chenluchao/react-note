/* 
  改文件专门用于暴露一个store对象，整个应用只有一个store对象
*/
// 引入createStore用于创建redux最核心的store
import { createStore,applyMiddleware } from 'redux'
// 引入为Count组件服务的reducer
import countReducer from './count_reducer'
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk';

// 暴露store
export default createStore(countReducer,applyMiddleware(thunk))
/* 
  异步action:
    1)、延迟的动作不想交给组件自身，想交给action
    2）、何时需要异步action：想要对状态进行操作，但是具体的数据靠异步任务返回
    3）、具体编码：
        1）yarn add redux-thunk并配置在store中
        2）创建action的函数不在返回一个一般对象而是返回一个函数，在该函数中写异步任务
        3）异步任务有结果后，分发给一个同步的action去真正操作数据
        4）备注：异步action不是必须的，完全可以自己等待异步任务的记过再去分发同步action
*/

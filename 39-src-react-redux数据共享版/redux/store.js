/* 
  该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/
// 引入createStore用于创建redux最核心的store
import { createStore,applyMiddleware,combineReducers } from 'redux'
// 引入为Count组件服务的reducer
import countReducer from './reducers/count'
// 引入为Person组件服务的reducer
import personReducer from './reducers/person'
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk';

// 汇总所有的reducer
// combineReducers传入的对象就是redux保存的中对象
const allReducer = combineReducers({
  he:countReducer,
  rens:personReducer
})
// 暴露store
export default createStore(allReducer,applyMiddleware(thunk))
/* 
  数据共享
      1）定义一个Person组件，和Count组件通过redux共享数据。
      2）为Person组件编写reducer、action配置contant常量
      3）重点：Person的reducer和Count的reducer要使用combinReducers进行合并，
              合并后的中状态是一个对象
      4）交给store的是中reducer，最后注意在组件中取出状态的时候，记得‘取到位’
*/
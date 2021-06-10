/* 
  改文件专门用于暴露一个store对象，整个应用只有一个store对象
*/
// 引入createStore用于创建redux最核心的store
import { createStore,applyMiddleware,combineReducers } from 'redux'
// 引入为Count组件服务的reducer
import countReducer from './reducers/count'
// 引入为Person组件服务的reducer
import personReducer from './reducers/person'
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk';

// 引入redux-devtools-extension
// import {composeWithDevTools} from 'redux-devtools-extension'
// 汇总所有的reducer
// combineReducers传入的对象就是redux保存的中对象
const allReducer = combineReducers({
  he:countReducer,
  rens:personReducer
})
// 暴露store
// export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))
export default createStore(allReducer,applyMiddleware(thunk))

/* 
  浏览器redux调试工具
    1）yarn add redux-devtools-extension
    2）store中进行配置
      import {composeWithDevTools} from 'redux-devtools-extension'
    export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))
*/
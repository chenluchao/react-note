// 该文件用于汇总多有reducer

// 引入combineReducers用于汇总reducer
import { combineReducers } from 'redux'
// 引入为Count组件服务的reducer
import count from './count'
// 引入为Person组件服务的reducer
import persons from './person'
// 汇总所有的reducer
// combineReducers传入的对象就是redux保存的中对象
export default combineReducers({
  count,
  persons,
})

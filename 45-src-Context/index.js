import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import store from './redux/store'
import { Provider } from 'react-redux'
ReactDOM.render(
  // 此处粗腰用Provider包裹app让所有的组件都能接受到store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

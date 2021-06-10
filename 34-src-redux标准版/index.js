import React from 'react'
import ReactDOM from 'react-dom'
//引入路由器
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
// import store from './redux/store'
import './index.css'

// store.subscribe(() => {
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
reportWebVitals()
// })

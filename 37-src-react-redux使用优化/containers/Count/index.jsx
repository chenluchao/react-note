// 引入connect用于连接UI组件和redux
import { connect } from 'react-redux'
// 引入COuntUI组件
import CountUI from '../../components/Count'
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from '../../redux/count_action'

// const mapStateToProps = (state) => {
//   return { count: state }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     jia: (number) => {dispatch(createIncrementAction(number))},
//     jian:(number) => {dispatch(createDecrementAction(number))},
//     jiaAsync:(number,time) => {dispatch(createIncrementAsyncAction(number,time))},
//   }
// }

export default connect(
  state=>({count:state}),
  {
    jia:createIncrementAction,
    jian:createDecrementAction,
    jiaAsync:createIncrementAsyncAction
  }
  )(CountUI)
/* 
  react-redux优化：
    1）容器组件和UI组件整合一个文件。
    2）无需自己给容器组件传递store，给<app/>包裹一个<Provider store={store}>即可。
    3）使用了react-redux后也不用自己再检测redux中状态的变化了，容器组件可以自动完成这个工作。
    4）mapDispatchToProps也可以简单的写成一个对象
    5)一个组件要和redux‘打交道’要经过几步
        1、定义好UI组件——不暴露
        2、引入connect生成一个容器组件，并暴露，写法如下：
            CONNECT(
              state=>({key:value}),
              {
                key:xxxAction,
                key:xxxAction
              }
            )(UI组件)
        3、在UI组件中通过this.props.xxxx读取和操作状态
*/
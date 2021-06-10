// 引入connect用于连接UI组件和redux
import { connect } from 'react-redux'
// 引入COuntUI组件
import CountUI from '../../components/Count'
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from '../../redux/count_action'

const mapStateToProps = (state) => {
  return { count: state }
}
const mapDispatchToProps = (dispatch) => {
  return {
    jia: (number) => {
      dispatch(createIncrementAction(number))
    },
    jian: (number) => {
      dispatch(createDecrementAction(number))
    },
    jiaAsync: (number, time) => {
      dispatch(createIncrementAsyncAction(number, time))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
/* 
  1）明确概念：
      1、UI组件：不能使用任何redux的api，只负责页面的呈现，交互等。
      2、容器组件：负责和redux通信，将结果交给UI组件。
  2）如何创建一个容器组件——靠react-redux的connect函数
      connect(mapStateToProps,mapDispatchToProps)(UI组件)
        -mapStateToProps：映射状态，返回值是一个对象
        -mapDispatchToProps：映射操作状态的方法，返回值是一个对象
  3）备注：容器组件中的store是靠props传进去的，而不是在容器组件中直接引入
*/

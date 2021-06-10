import React, { Component } from 'react'
// import qs from 'querystring'
const DetailData=[
  {id:'1',content:'你好，中国'},
  {id:'2',content:'你好，React'},
  {id:'3',content:'hello,world'},
]
export default class Detail extends Component {
  render() {
    console.log('Detail',this.props)
    // 接收params参数
    // const {id,title} = this.props.match.params || {}
    // 接收search参数
    // const {search} = this.props.location
    // const {id,title} = qs.parse(search.slice(1))
    const {id,title} = this.props.location.state
    const findResault = DetailData.find((detailObj)=>{
      return detailObj.id === id
    }) || {}
    return (
      <div>
        <ul>
          <li>ID:{id}</li>
          <li>Title:{title}</li>
          <li>Content:{findResault.content}</li>
        </ul>
      </div>
    )
  }
}

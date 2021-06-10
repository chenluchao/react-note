import React, { Component } from 'react'
const DetailData=[
  {id:'1',content:'你好，中国'},
  {id:'2',content:'你好，React'},
  {id:'3',content:'hello,world'},
]
export default class Detail extends Component {
  render() {
    // 接受params参数
    const {params} = this.props.match
    const findResault = DetailData.find((detailObj)=>{
      return detailObj.id === params.id
    })
    return (
      <div>
        <ul>
          <li>ID:{params.id}</li>
          <li>Title:{params.title}</li>
          <li>Content:{findResault.content}</li>
        </ul>
      </div>
    )
  }
}

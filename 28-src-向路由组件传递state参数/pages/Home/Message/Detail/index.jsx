import React, { Component } from 'react'
// import qs from 'querystring'
/* 
  qs库是react漠然就下载的无需另外下载
  let obj = {id:1,name:'xxx'} 
  //想转成id=1&name=xxx的形式其中id=1&name=xxx的形式称为urlencoded编码形式
  qs.stringfy(obj) ===> id=1&name=xxx
  ------------------------------------
  let str = 'id=1&name=xxx'
  qs.pares(str)===>{id:1,name:'xxx'}
*/
const DetailData=[
  {id:'1',content:'你好，中国'},
  {id:'2',content:'你好，React'},
  {id:'3',content:'hello,world'},
]
export default class Detail extends Component {
  render() {
    console.log('Detail',this.props)
    // 接受params参数
    // const {params} = this.props.match
    // 接收search参数
    // const {search} = this.props.location
    // const {id,title} = qs.parse(search.slice(1))
    // 接收state参数
    const {id,title} = this.props.location.state || {}
    const findResault = DetailData.find((detailObj)=>{
      return detailObj.id === id.toString()
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

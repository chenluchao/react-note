import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPerson } from '../../redux/actions/person'
import './index.less'
class PersonUI extends Component {
  addPerson = () => {
    const username = this.username.value
    const ageNode = this.ageNode.value
    const personObj = {
      id: Math.random() * 10,
      name: username,
      age: ageNode,
    }
    this.props.addPerson(personObj)
    this.username.value = ''
    this.ageNode.value = ''
  }
  render() {
    return (
      <div className="person">
        <h1>Person组件</h1>
        <h3>————上方组件求和为{this.props.count}————</h3>
        <input
          ref={(c) => (this.username = c)}
          type="text"
          placeholder="请输入姓名"
        />
        &nbsp;&nbsp;
        <input
          ref={(c) => (this.ageNode = c)}
          type="text"
          placeholder="请输入年龄"
        />
        &nbsp;&nbsp;
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {this.props.personArr.map((item) => {
            return (
              <li>
                {item.name}——{item.age}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
export default connect((state) => ({ personArr: state.persons, count: state.count }), {
  addPerson,
})(PersonUI)

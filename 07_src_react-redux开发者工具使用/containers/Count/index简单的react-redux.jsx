import React, { Component } from 'react'
import { connect } from 'react-redux'
import {countIncrementAction} from '../../redux/count_action'

//创建一个ui组件,不暴露
class Count extends Component {

    state = {
        count: 0
    }

    addCount = () => {
        const {count} = this.state
        this.props.jia(count + 1)
    }
    
  render() {
    return (
      <div>
          <h1>当前求和为: {this.props.count}</h1>
          <button onClick={this.addCount}>点我+1</button>
      </div>
    )
  }
}

//创建connect容器
export default connect(
    state => ({count: state}),
    {
        jia:countIncrementAction
    }
) (Count)
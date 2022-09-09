import React, { Component } from 'react'

//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
import {
    countIncrementAction,
    countDecrementAction,
    countIncrementAsyncAction
} from '../../redux/actions/count.js'

//映射状态
// const mapStateToProps = state => ({ const: state })

//映射操作的方法
/* 
const mapDispatchToProps = (dispatch) => {
    return {
        jia: number => dispatch(countIncrementAction(number)),
        jian: number => dispatch(countDecrementAction(number)),
        asyncJia: (number, time) => dispatch(countIncrementAsyncAction(number, time))
    }
} 
*/

//引入actionCreator,用于创建action对象
class Count extends Component {


    increment = () => {
        const {value} = this.selectNumber
        this.props.jia(value * 1)

    }
    decrement = () => {
        const {value} = this.selectNumber
        this.props.jian(value * 1)

    }
    incrementIfOdd = () => {
        const {value} = this.selectNumber
        if (this.props.count % 2 === 1) {
            this.props.jia(value * 1)
        }

    }
    incrementAsync = () => {
        const {value} = this.selectNumber
        this.props.asyncJia(value * 1, 500)

    }

  render() {
    return (
      <div>
          <h1>我是Count组件, 下面的总人数为{this.props.rens}</h1>
          <h2>当前求和为: {this.props.count}</h2>
          <select ref={c => this.selectNumber = c}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
          </select>&nbsp;
          <button onClick={this.increment}>+</button>&nbsp;
          <button onClick={this.decrement}>-</button>&nbsp;
          <button onClick={this.incrementIfOdd}>为奇数时加</button>&nbsp;
          <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}

//使用connect() ()创建并暴露一个CountUI容器组件

export default connect(
    //mapStateToProps的简写
    state => ({
        count: state.he,
        rens: state.rens.length
    }),
    {
        //mapDispatchToProps的简写
        jia:countIncrementAction,
        jian:countDecrementAction,
        asyncJia:countIncrementAsyncAction
    }
)(Count)
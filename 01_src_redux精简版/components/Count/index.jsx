import React, { Component } from 'react'
//引入store,用于获取redux中保存的状态
import store from '../../redux/store'

export default class Count extends Component {

    state = {
        count: 0
    }

   /*  componentDidMount() {
        //检测redux中状态的变化,只要变化就调用render
        store.subscribe(() => {
            this.setState({})
        })
    } */

    increment = () => {
        //函数体
        const {value} = this.selectNumber
        /* store.dispatch告诉方法和数值 */
        store.dispatch({type: 'increment', data: value * 1})
    }
    decrement = () => {
        //函数体
        const {value} = this.selectNumber
        store.dispatch({type: 'decrement', data:value * 1})
    }
    incrementIfOdd = () => {
        //函数体
        const {value} = this.selectNumber
        const count = store.getState()
        if (count % 2 === 1) {
            store.dispatch({type: 'increment', data:value * 1})
        }
    }
    incrementAsync = () => {
        //函数体
        const {value} = this.selectNumber
        setTimeout(() => {
            store.dispatch({type: 'increment', data: value * 1})
        }, 500)
    }

  render() {
    return (
      <div>
          {/* store.getState获取当前状态 */}
          <h1>当前求和为: {store.getState()}</h1>
          <select ref={c => this.selectNumber = c}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
          </select>&nbsp;
          <button onClick={this.increment}>+</button>&nbsp;
          <button onClick={this.decrement}>-</button>&nbsp;
          <button onClick={this.incrementIfOdd}>当前求和为奇数时再加</button>&nbsp;
          <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}

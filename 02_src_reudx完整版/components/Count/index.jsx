import React, { Component } from 'react'
import store from '../../redux/store'
//引入actionCreator,用于创建action对象
import {countIncrementAction, countDecrementAction} from '../../redux/count_action'

export default class Count extends Component {

    /* state = {
        count: 0
    } */

    //事件监听
    /* componentDidMount() {
        store.subscribe(() => {
            this.setState({})
        })
    } */
    
    increment = () => {
        const {value} = this.selectNumber
        store.dispatch(countIncrementAction(value * 1))

    }
    decrement = () => {
        const {value} = this.selectNumber
        store.dispatch(countDecrementAction(value * 1))

    }
    incrementIfOdd = () => {
        const {value} = this.selectNumber
        const count = store.getState()
        console.log('当前的值', value);
        if (count % 2 === 1) {
            store.dispatch(countIncrementAction(value * 1))
        }
    }
    incrementAsync = () => {
        const {value} = this.selectNumber
        setTimeout(() => {
            store.dispatch(countIncrementAction(value * 1))
        }, 500)
    }

  render() {
    return (
      <div>
          <h1>当前求和为: {store.getState()}</h1>
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

import React, { Component } from 'react'
import Count from './containers/Count/index'
import Person from './containers/Person'

export default class App extends Component {
  render() {
    return (
      <div>
          <Count/>
          <Person/>
      </div>
    )
  }
}

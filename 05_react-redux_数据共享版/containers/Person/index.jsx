import React, { Component } from 'react'
import { connect } from 'react-redux'
import { personJiaYiRen } from '../../redux/actions/person'
import { nanoid } from 'nanoid'

class Person extends Component {

    addPerson = () => {
        const name = this.name.value
        const age = this.age.value
        const personObj = {
            id: nanoid(),
            name: name,
            age: age
        }
        this.props.jiayiren(personObj)
        this.name.value = ''
        this.age.value = ''
    }

    render() {
        return (
            <div>
                <h1>我是Person组件, 上面的总和为{this.props.he}</h1>
                <input ref={c => this.name = c} type="text" placeholder='输入名字' />&nbsp;
                <input ref={c => this.age = c} type="text" placeholder='输入年龄' />&nbsp;
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.renObj.map((person) => {
                            return(
                                <li key={person.id}> {person.name}  {person.age} </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({
        renObj: state.rens,
        he: state.he
    }),
    {jiayiren: personJiaYiRen}
)(Person)

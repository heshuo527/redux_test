import { ADD_PERSON } from "../constant"

//初始化状态
const initState = [
    {id: '001', name: '吴彦祖', age: '18'}
]
export default function personReducer(preState = initState, action) {
    console.log('初始化成功', preState);
    const {type, data} = action
    switch (type) {
        case ADD_PERSON:
            return [ ...preState, data]
        default:
            return preState
    }
}
import {INCREMENT, DECREMENT} from '../constant.js'

/* 
    该文件用于创建一个为count组件服务的reducer,它的本质是一个函数
    reducer会接收两个参数,previousState 和 action两个参数
*/


//初始化
const countState = 0
export default function countReducer(pre = countState, action) {
    const {type, data} = action
    console.log('ree', pre);
    switch (type) {
        case INCREMENT:
            return pre + data
        case DECREMENT:
            return pre - data
        default:
            return pre
    }
}
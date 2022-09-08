import {INCREMENT, DECREMENT} from './constant'

/* 
    为count组件服务的action
*/

export const countIncrementAction = data => ({type: INCREMENT, data})
export const countDecrementAction = data => ({type: DECREMENT, data})
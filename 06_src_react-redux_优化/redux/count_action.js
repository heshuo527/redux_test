import {INCREMENT, DECREMENT} from './constant'

/* 
    为count组件服务的action
*/

//同步action,指的是action的值为函数,异步action中一般会调用通过action,异步action不是必须要使用的
export const countIncrementAction = data => ({type: INCREMENT, data})
export const countDecrementAction = data => ({type: DECREMENT, data})

//异步action,指的是action的值为函数,异步action中一般会调用通过action,异步action不是必须要使用的
export const countIncrementAsyncAction = ((data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(countIncrementAction(data))
        }, time)
    }
})

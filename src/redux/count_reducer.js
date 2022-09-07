/* 
    1.该文件是用于创建一个为Count组件服务的reducer,reducer的本质就是一个函数
    2.reducer会接收到两个参数previousState和action两个参数(之前的状态和动作对象)
*/

// 初始化状态
const initState = 0
export default function countReducer(preState = initState, action) {
    //从action对象中获取: type,data
    const {type, data} = action
    //根据type决定如何加工数据
    switch (type) {
        case 'increment'://如果是加
            return preState + data

        case 'decrement'://如果是减
            return preState - data

        /* case 'incrementIfOdd'://如果是奇数则相加
            if (preState % 2 === 1) {
                return preState + data
            }

        case 'incrementAsync'://异步相加
            setTimeout(() => {
                return preState + data1
            }, 500) */

        default:
            return preState
    }
}
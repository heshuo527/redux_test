/* 
    该文件用于暴露store对象
*/

//引入createStore文件,专门用于创建redux中最重要的store对象
import {createStore} from 'redux'
//引入count_reducer文件
import countReducer from './count_reducer'
//暴露createStore文件
export default createStore(countReducer)

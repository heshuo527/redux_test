/* 
    该文件用于暴露store对象
*/

//引入createStore文件,专门用于创建redux中最重要的store对象
import {createStore, applyMiddleware, combineReducers} from 'redux'
//引入count_reducer文件
import countReducer from './reducers/count.js'
//引入count_reducer文件
import personReducer from './reducers/person.js'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const allRedux = combineReducers({
    he: countReducer,
    rens: personReducer
})
//暴露createStore文件
export default createStore(allRedux, composeWithDevTools(applyMiddleware(thunk)))

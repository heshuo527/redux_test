//引入countUi组件
import CountUI from '../../components/Count'

//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
import {
    countIncrementAction,
    countDecrementAction,
    countIncrementAsyncAction
} from '../../redux/count_action'


//映射状态
const mapStateToProps = state => ({count: state})

//隐射操作方法
const mapDispatchToProps = (dispatch) => {
    return {
        jia: number => dispatch(countIncrementAction(number)),
        jian: number => dispatch(countDecrementAction(number)),
        asyncJia: (number, time) => dispatch(countIncrementAsyncAction(number, time))
    }
}

//使用connect() ()创建并暴露一个CountUI容器组件
export default connect(mapStateToProps, mapDispatchToProps) (CountUI)
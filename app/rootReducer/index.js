import Reducer from '../Reducer'
import {combineReducers} from 'redux'
import Reducer2 from '../Reducer2'
const RootReducer =combineReducers(
    {
        Reducer:Reducer,
        Reducer2:Reducer2
    }
)
export default RootReducer
import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import countReducer from '../reducers/CountReducer'
import randomReducer from '../reducers/RandomReducer'
import randomnumberReducer from '../reducers/RandomnumberReducer'
import userlistReducer from '../reducers/UserList'
import userremoveReducer from '../reducers/userTableRemove'
import taskReducer from '../reducers/TaskReducer'
const configureStore=()=>{
    const store=createStore(combineReducers({
        count:countReducer,
        random:randomReducer,
        randomnumber:randomnumberReducer,
        userlist:userlistReducer,
        useremove:userremoveReducer,
        task:taskReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore


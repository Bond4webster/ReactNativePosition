import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {infoReducer} from './reducers/info'

const rootReducer = combineReducers({
    info: infoReducer
})

export default createStore(rootReducer,applyMiddleware(thunk))
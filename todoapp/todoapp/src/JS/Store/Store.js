import {createStore, combineReducers} from 'redux'
import rootReducer from '../reducers/rootReducer'

const allReducers = combineReducers({todo:rootReducer})
const Store = createStore(allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default Store;

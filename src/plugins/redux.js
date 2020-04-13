import {createStore,combineReducers,applyMiddleware,compose} from "redux";   //compose增强器 合并中间件
import thunk from 'redux-thunk'

import banner from '../store/reducers/banner'
import column from '../store/reducers/column'
import detail from '../store/reducers/detail'
import detail2 from '../store/reducers/detail2'
import friend from '../store/reducers/friend'
import cart from '../store/reducers/cart'
import home from '../store/reducers/home'
import user from '../store/reducers/user'

import bNav from '../store/reducers/bNav'
import bFoot from '../store/reducers/bFoot'
import bLoading from '../store/reducers/bLoading'

let rootReducer=combineReducers({banner,column,detail,detail2,friend,cart,home,user,bNav,bFoot,bLoading})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//使用redux-devtools
let store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));//安装了中间件，改装了redux

export default store;
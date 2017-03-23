import _ from 'lodash'
import thunk from 'redux-thunk'
import { browserHistory } from 'react-router'
import { applyMiddleware, createStore, compose } from 'redux'

import rootReducer from '../reducers'

const middlewares = [thunk]

const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)))

export default store
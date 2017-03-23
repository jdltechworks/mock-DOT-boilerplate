import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import ColorScheme from './ColorScheme'
import Dashboard from './Dashboard'
import Overlay from './Overlay'
import User from './User'
import Auth from './Auth'
import Navigation from './Navigation'

/**
 * Register the reducers
 * @type {object}
 */
export default combineReducers({
	Auth,
	ColorScheme,
	Navigation,
	Dashboard,
	Overlay,
	User,
	routing: routerReducer 
})
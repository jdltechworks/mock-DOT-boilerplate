import React, { Component } from 'react'
import { browserHistory, IndexRoute, Router, Route } from 'react-router'
import App from '../containers'
import DOTContainer from '../containers/DOTContainer'

import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import store from '../__REDUX__/store/client'

const history = syncHistoryWithStore(browserHistory, store)

/**
 * Routes that are intended for the client rendering
 * @return Component Group of routes
 */
export default () => {
	return(
		<Provider store={store}>
			<Router history={history}>
				<Route path="/" component={App}>
					<Route path="/dashboard" component={DOTContainer}></Route>
				</Route>
			</Router>
		</Provider>
	)
}

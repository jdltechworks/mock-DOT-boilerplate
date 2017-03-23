import React, { Component } from 'react'
import NavigationHOC from '../__HOC__/navigation'
import Auth from '../__HOC__/auth'
import { Provider } from 'react-redux'
import store from '../__REDUX__/store/client'


export default class Header extends Component {
	render() {
		return(
			<ul className="nav navbar-nav navbar-right">
				<li><button onClick={(e) => {
					store.dispatch({type: 'CREATE_CHART_CLICKED'})
				}}>Add chart</button></li>
			</ul>

		)
	}
}
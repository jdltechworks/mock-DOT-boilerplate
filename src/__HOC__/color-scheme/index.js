import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'
import * as ColorSchemeModules from '../../__REDUX__/actions/color-scheme'
import * as OverlayModules from '../../__REDUX__/actions/overlay'

/**
 * HOC color-scheme switcher
 * @param  {[type]}   themeState [description]
 * @param  {Function} callback   [description]
 * @return {[type]}              [description]
 */
const ColorScheme = (schemeState) => {
	var actions = {}
	return TargetComponent => {
		//state subscription
		@connect((state) => {
			let stateSubscription
			if(!_.isArray(schemeState)) {
				stateSubscription = { [schemeState.toLowerCase()]: state[schemeState] }
			} else {
				stateSubscription = {}
				_.map(schemeState, (_state) => {
					Object.assign(stateSubscription, { [_state.toLowerCase()]: state[_state] })
				})
			}
			return stateSubscription
		}, dispatch => bindActionCreators(_.merge(actions, ColorSchemeModules, OverlayModules), dispatch))
		
		class ColorSchemer extends Component {
			render() {
				const { props } = this
				return <TargetComponent {...props} />
			}
		}
		return ColorSchemer
	}
}

export default ColorScheme
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const NavigationHOC = () => {
	return TargetComponent => {
		@connect((state) => {
			return {
				state: state.Navigation
			}
		})
		class Navigation extends Component {
			render() {
				const { props } = this
				console.log(props)
				return <TargetComponent {...props} />
			}
		}
		return Navigation
	}
}

export default NavigationHOC
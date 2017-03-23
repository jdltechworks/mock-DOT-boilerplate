import React, { Component } from 'react'
import { connect } from 'react-redux'

const Auth = () => {
	return TargetComponent => {
		@connect((state) => {
			return {
				auth: state.Auth
			}
		})
		class AuthContainer extends Component {
			render() {
				const { props } = this
				return <TargetComponent {...props} />
			}
		}
		return AuthContainer
	}
}

export default Auth
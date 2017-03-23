import React, { Component } from 'react'

export default class Overlay extends Component {
	render() {
		return(
			<div className="overlay">
				<div className="overlay--inner">
					{ this.props.children }
				</div>
			</div>
		)
	}
}
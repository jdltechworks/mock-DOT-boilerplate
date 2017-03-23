import React, { Component } from 'react'
import _ from 'lodash'
export default class Modal extends Component {
	render() {
		let { props } = this
		let { id, name, title, type, onClose, modalTitle, modalDescription } = props
		return(
		<div className="modal">
			<div className="modal--inner">
				<div className="modal--header">
					<h4>{modalTitle}</h4>
					<a href="#" onClick={onClose}><i className="modal--close ion-md-close"></i></a>
				</div>
				<div className="modal--content">
					<p className="modal--description">{modalDescription}</p>
					{ this.props.children }
				</div>
			</div>
		</div>)
	}
}
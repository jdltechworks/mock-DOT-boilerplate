import React, { Component } from 'react'
import _ from 'lodash'
import Auth from '../__HOC__/auth'
import Modal from '../components/overlay/modal'
import ColorScheme from '../__HOC__/color-scheme'
import SchemeSelector from '../__HOC__/color-scheme/controller'

const  { schemeCollection } = JSON.parse(InitialState)


const _schemes = _.keys(schemeCollection)

@Auth()
@ColorScheme(['ColorScheme', 'Overlay'])
export default class DOTContainer extends Component {
	render() {
		const { props } = this
		const { children } = props
		return(
			<div className="dot--container">
				<SchemeSelector 
					{...props} 
					custom={(e) => {
						const { open, close } = props
						e.preventDefault()
							open(
								<Modal 
									modalTitle={`Custom Color Sheme`} 
									modalDescription={`Custom Color Sheme`} 
									onClose={close}>
								</Modal>
							)
					}}
					schemes={_schemes} />
					{JSON.stringify(props.colorscheme.schemeProperties)}
				{ children }
			</div>
		)
	}
}

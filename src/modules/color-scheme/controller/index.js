import React, { Component } from 'react'

export default class ColorSchemeController extends Component {
	render() {
		const { props } = this
		const { switchScheme, schemes, custom } = props
		return(
			<div className="scheme--selector">
				<ul>
					{_.map(schemes, (scheme, key) => {
						return(
							<li key={key}>
								<a href="#" onClick={(e)=> {
									e.preventDefault()
									switchScheme(scheme)
								}}>{scheme}</a>
							</li>
						)
					})}
					{ custom ? <li><a href="#" onClick={custom}>Custom</a></li> : null }
				</ul>
			</div>
		)
	}
}
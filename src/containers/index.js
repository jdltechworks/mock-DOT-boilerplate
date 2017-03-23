import React, { Component } from 'react'

export default class App extends Component {
	render() {
    const { props } = this
    const { children } = props
        return(
            <div className="container-fluid">{children}</div>
        )
    }
}
import _ from 'lodash'

/**
 * Assuming we have an initial state rendered from the backend through our template were we can decode
 */
const { schemeCollection } = JSON.parse(InitialState)


const ColorScheme = (state = {
	schemeCollection,
	default: schemeCollection['midnight'],
	changed: false
}, action) => {
	const { type } = action
	const { payload } = action
	switch(type) {
		case 'SCHEME_SWITCHED': return {
			...state,
			changed: true,
			schemeProperties: schemeCollection[payload]
		}
		default: return state
	}
}

export default ColorScheme
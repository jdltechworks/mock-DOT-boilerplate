import _ from 'lodash'

const ColorScheme = (state = { changed: false }, action) => {
	const { type } = action
	const { payload } = action
	switch(type) {
		case 'SCHEME_SWITCHED': return {
			...state,
			changed: true,
			schemeProperties: payload
		}
		default: return state
	}
}

export default ColorScheme
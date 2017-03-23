const Overlay = (state = {
	component: null,
	open: false
}, action) => {
	const { type } = action
	const { component } = action
	switch(type) {
		case 'OVERLAY_OPENED': return {
			...state,
			open: true,
			component
		}
		break
		case 'OVERLAY_CLOSED': return {
			...state,
			open: false,
			component: null
		}
		break
		default: return state
	}
}

export default Overlay
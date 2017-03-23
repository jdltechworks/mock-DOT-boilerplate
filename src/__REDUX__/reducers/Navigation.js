const Navigation = (state = {
	sidebarIsOpen: false
}, action) => {
	const { type } = action
	switch(type) {
		case 'CREATE_CHART_CLICKED': return {
			...state,
			sidebarIsOpen: true
		}
		default: return state
	}
}

export default Navigation
const Dashboard = (state = {}, action) => {
	let { type } = action
	switch(type) {
		case 'IS_GETTING_DASHBOARD_CONFIG': return {
			...state
		}
		case 'DASHBOARD_CONFIG_FETCH_COMPLETE': return {
			...state
		}
		default: return state
	}
}

export default Dashboard
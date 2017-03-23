const User = (state = { success: false, isFetching: false }, action) => {
	let { type, payload } = action
	switch(type) {
		case 'IS_FETCHING_PROJECT_USERS': return {
				...state,
				users: []
			}
		break
		case 'PROJECT_USERS_FETCHED': return {
				...state,
				users: payload,
				success: true
			}
		break
		case 'USERS_FETCH_ERROR': return {
				...state,
				users: [],
				success: false,
			}
		break
		default: return state
	}
}

export default User
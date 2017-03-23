import _ from 'lodash'
/**
 * Get member of the project
 * @param  {string} id     project id
 * @param  {object} params query string in the future
 * @return {object}        payload of the fetch result
 */
export const fetchProjectUsers = (id, params) => {
	const url = new URL('https://randomuser.me/api/')
	_.map(params, (value, key) => {
		url.searchParams.append(key, value)
	})
	return dispatch => {
		dispatch({ type: 'IS_FETCHING_PROJECT_USERS'})
		return fetch(url)
		.then(res => res.json())
		.then(json => dispatch({ type: 'PROJECT_USERS_FETCHED', payload: json.results }))
		.catch(err => dispatch({ 
			type: 'USERS_FETCH_ERROR', 
			payload: { message: `Error in fetching: ${err}`}}))
	}
}

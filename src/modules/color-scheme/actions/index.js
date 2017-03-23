export const switchScheme = (schemeName) => {
	return {
		type: 'SCHEME_SWITCHED',
		payload: schemeName
	}
}
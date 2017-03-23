export const open = (component) => {
	return {
		type: 'OVERLAY_OPENED',
		payload: null,
		component
	}
}

export const close= () => {
	return {
		type: 'OVERLAY_CLOSED',
		payload: null,
		component: undefined
	}
}
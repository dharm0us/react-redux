let initialState = 'food'
export default function activeCategory(state=initialState,action) {
	switch(action.type) {
		case CHANGE_CATEGORY:
			return action.payload 
		default:
			return state
	}
}

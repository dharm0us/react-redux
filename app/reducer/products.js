let initialState = 
	 [
	{id:1, name:'pizza', cost:10, category:'food'},
	{id:2, name:'apple', cost:20, category:'food'},
	{id:3, name:'tv', cost:50, category:'electronics'},
	{id:4, name:'phone', cost:500, category:'phone'},
		]

export default function products(state=initialState,action) {
	switch(action.type) {
		default:
			return state
	}
}

import {ADD_TO_CART,REMOVE_FROM_CART,CHANGE_CATEGORY} from '../components/constants/actionTypes.js'

let initialState = {
	activeCategory: 'food',
	products: [
	{id:1, name:'pizza', cost:10, category:'food'},
	{id:2, name:'apple', cost:20, category:'food'},
	{id:3, name:'tv', cost:50, category:'electronics'},
	{id:4, name:'phone', cost:500, category:'phone'},
		],
	shoppingCart: [
		]
}	

export default function reducer(state=initialState, action) {
	switch(action.type) {
		case CHANGE_CATEGORY:
			return {
				...state,
				activeCategory: action.payload
			}
		case ADD_TO_CART:
			return {
				...state,
				shoppingCart: [...state.shoppingCart, action.payload]
			}
		case REMOVE_FROM_CART:
			return {
				...state,
				shoppingCart: state.shoppingCart.filter(productId => productId != action.payload)
			}
		default:
			return state
	}
}

let s = reducer(initialState,{type: CHANGE_CATEGORY, payload: 'electronics'})
console.log(s)
s = reducer(initialState,{type: ADD_TO_CART, payload: 193})
console.log(s)
s = reducer(initialState,{type: REMOVE_FROM_CART, payload: 193})
console.log(s)


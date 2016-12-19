import {ADD_TO_CART,REMOVE_FROM_CART,CHANGE_CATEGORY} from '../components/constants/actionTypes.js'
import activeCategory from './activeCategory.js'
import products from './products.js'
import shoppingCart from './shoppingCart.js'

function reducer(state=initialState, action) {
	return {
		activeCategory: activeCategory(state.activeCategory,action),
		products: products(state.products,action),
		shoppingCart: shoppingCart(state.shoppingCart,action)
	}
}

let s = reducer(initialState,{type: CHANGE_CATEGORY, payload: 'electronics'})
console.log(s)
s = reducer(initialState,{type: ADD_TO_CART, payload: 193})
console.log(s)
s = reducer(initialState,{type: REMOVE_FROM_CART, payload: 193})
console.log(s)


import {combineReducers} from 'redux'
import {ADD_TO_CART,REMOVE_FROM_CART,CHANGE_CATEGORY} from '../components/constants/actionTypes.js'
import activeCategory from './activeCategory.js'
import products from './products.js'
import shoppingCart from './shoppingCart.js'

let reducer = combineReducers(activeCategory,products,shoppingCart)
export default reducer


/* 
    
*/

import { createSlice } from '@reduxjs/toolkit'
import { updateCart } from '../utils/cartUtils'

// check if there is a cart in local storage then parse it to JSON else set it to an empty array
const initialState = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : { cartItems: [] }

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload // item is the product

            // check if the item is already in the cart (x is the item in the cart)
            const existItem = state.cartItems.find((x) => x._id === item._id)

            // if the item is already in the cart, map through the cartItems array and update the quantity of the item
            if (existItem) {
                // x is the item in the cart
                state.cartItems = state.cartItems.map((x) => (x._id === existItem._id ? item : x))
            } else {
                // if the item is not in the cart, add the item to the cartItems array
                state.cartItems = [...state.cartItems, item]
            }

            return updateCart(state)
        },
    },
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer

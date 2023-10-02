/* 
    
*/

import { createSlice } from '@reduxjs/toolkit'
import { updateCart } from '../utils/cartUtils'

// check if there is a cart in local storage then parse it to JSON else set it to an empty array
const initialState = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : { cartItems: [], shippingAddress: {}, paymentMethod: 'PayPal' }

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
        removeFromCart: (state, action) => {
            // filter out the item that matches the id of the item to be removed (x is the item in the cart that is not the item to be removed)
            state.cartItems = state.cartItems.filter((x) => x._id !== action.payload)

            return updateCart(state)
        },
        saveShippingAddress: (state, action) => {
            state.shippingAddress = action.payload
            return updateCart(state)
        },
        savePaymentMethod: (state, action) => {
            state.paymentMethod = action.payload
            return updateCart(state)
        },
    },
})

export const { addToCart, removeFromCart, saveShippingAddress, savePaymentMethod } =
    cartSlice.actions

export default cartSlice.reducer

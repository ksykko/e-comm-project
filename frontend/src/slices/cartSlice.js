/* 
    
*/

import { createSlice } from '@reduxjs/toolkit'

// check if there is a cart in local storage then parse it to JSON else set it to an empty array
const initialState = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : { cartItems: [] }

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
})

export default cartSlice.reducer

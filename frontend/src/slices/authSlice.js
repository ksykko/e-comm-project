/* 

*/

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // check if there is a userInfo in local storage then parse it to JSON else set it to null
    userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            // set the userInfo in local storage to the payload
            state.userInfo = action.payload
            localStorage.setItem('userInfo', JSON.stringify(action.payload))
        },
        logout: (state, action) => {
            // set the userInfo in local storage to null
            state.userInfo = null
            localStorage.removeItem('userInfo')
        },
    },
})

export const { setCredentials, logout } = authSlice.actions

export default authSlice.reducer

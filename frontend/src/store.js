/* 
    This file is used to create the store for the application.
    Store is a global state for the application. 
*/

import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './slices/apiSlice'

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
})

export default store

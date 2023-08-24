/* 
    This file is the parent slice of the global state for the application.
    createApi is a function that takes a baseQuery and a set of endpoint definitions and returns an object with the generated hooks and the API slice reducer.
    fetchBaseQuery is a function that takes a baseUrl and returns a baseQuery function that can be used with createApi.
*/

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../constants'

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL })

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['Product', 'Order', 'User'],
    endpoints: (builder) => ({}),
})

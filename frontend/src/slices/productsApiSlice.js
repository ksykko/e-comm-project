/*
    This file is a slice of the global state for the application.
    Slice is a part of the global state for the application.
 */

import { PRODUCTS_URL } from '../constants'
import { apiSlice } from './apiSlice'

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: PRODUCTS_URL,
            }),
            keepUnusedDataFor: 5, // Keep the data for 5 seconds
        }),
        getProductDetails: builder.query({
            query: (productId) => ({
                url: `${PRODUCTS_URL}/${productId}`,
            }),
            keepUnusedDataFor: 5, // Keep the data for 5 seconds
        }),
    }),
})

export const { useGetProductsQuery, useGetProductDetailsQuery } = productsApiSlice

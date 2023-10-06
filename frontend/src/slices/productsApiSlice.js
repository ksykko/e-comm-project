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
        createProduct: builder.mutation({
            query: () => ({
                url: PRODUCTS_URL,
                method: 'POST',
            }),
            invalidatesTags: ['Product'], // Invalidate the Product tag when this mutation is called so that the getProducts query will be refetched
        }),
    }),
})

export const { useGetProductsQuery, useGetProductDetailsQuery, useCreateProductMutation } =
productsApiSlice
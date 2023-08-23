/*  
    This file is a controller that is used to handle the routes for the products.
*/

import asyncHandler from '../middleware/asyncHandler.js'
import Product from '../models/product.model.js'

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({}) // Get all products

    res.json(products)
})

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id) // Get product by ID

    if (product) {
        return res.json(product)
    } else {
        res.status(404) // Set the status to 404
        throw new Error('Resource not found') // Throw an error
    }
})

export { getProducts, getProductById }

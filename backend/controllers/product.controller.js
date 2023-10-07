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

// @desc Create a product
// @route POST /api/products
// @access Private/Admin
const createProduct = asyncHandler(async (req, res) => {
    const product = new Product({
        name: 'Sample product',
        price: 0,
        user: req.user._id,
        image: '/images/sample.jpg',
        brand: 'Sample brand',
        category: 'Sample category',
        countInStock: 0,
        numReviews: 0,
        description: 'Sample description',
    })

    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
})

// @desc Update a product
// @route PUT /api/products/:id
// @access Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
    const { name, price, description, image, brand, category, countInStock } = req.body

    const product = await Product.findById(req.params.id)

    if (product) {
        product.name = name
        product.price = price
        product.description = description
        product.image = image
        product.brand = brand
        product.category = category
        product.countInStock = countInStock

        const updatedProduct = await product.save()
        res.json(updatedProduct)
    } else {
        res.status(404) // Set the status to 404
        throw new Error('Product not found') // Throw an error
    }
})

// @desc Delete a product
// @route DELETE /api/products/:id
// @access Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        await product.deleteOne({ _id: product._id })
        res.status(200).json({ message: 'Product deleted' })
    } else {
        res.status(404) // Set the status to 404
        throw new Error('Product not found') // Throw an error
    }
})

export { getProducts, getProductById, createProduct, updateProduct, deleteProduct }

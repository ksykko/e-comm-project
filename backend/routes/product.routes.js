/* 
    This file is used to create the routes for the products.
    The routes are then imported into backend/server.js
*/

import express from 'express'
import { getProducts, getProductById, createProduct } from '../controllers/product.controller.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/:id').get(getProductById)

export default router
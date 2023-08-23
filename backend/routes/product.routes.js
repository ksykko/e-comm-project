/* 
    This file is used to create the routes for the products.
    The routes are then imported into backend\server.js
*/

import express from 'express'
import { getProducts, getProductById } from '../controllers/product.controller.js'

const router = express.Router()

router.route('/').get(getProducts)
router.route('/:id').get(getProductById)

export default router

/* 
    This file is used to create the routes for the orders.
    The routes are then imported into backend\server.js
*/

import express from 'express'
import {
    addOrderItems,
    getMyOrders,
    getOrderById,
    updateOrderToPaid,
    updateOrderToDelivered,
    getOrders,
} from '../controllers/order.controller.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered)

export default router

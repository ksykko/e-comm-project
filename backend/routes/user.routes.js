/* 
    This file is used to create the routes for the users.
    The routes are then imported into backend\server.js
*/

import express from 'express'
import {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserByID,
    deleteUser,
    updateUser,
} from '../controllers/user.controller.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()

// Admin routes
router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/logout', logoutUser)
router.post('/auth', authUser)

// Profile routes
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)

// Admin routes
router
    .route('/:id')
    .delete(protect, admin, deleteUser)
    .get(protect, admin, getUserByID)
    .put(protect, admin, updateUser)

export default router

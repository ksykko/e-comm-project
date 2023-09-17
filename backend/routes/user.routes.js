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

const router = express.Router()

router.route('/').post(registerUser).get(getUsers)
router.post('/logout', logoutUser)
router.post('/login', authUser)
router.route('/profile').get(getUserProfile).put(updateUserProfile)
router.route('/:id').delete(deleteUser).get(getUserByID).put(updateUser)

export default router

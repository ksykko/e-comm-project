/* 
    This file is used to generate a JWT token and set it as a HTTP-only cookie.
    Used in:
     - backend/controllers/user.controller.js
        - authUser()
        - registerUser()

*/

import jwt from 'jsonwebtoken'

const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })

    // Set JWT as HTTP-only cookie
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    })
}

export default generateToken

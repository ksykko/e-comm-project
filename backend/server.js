/*
    This is the main file of the backend. It is responsible for connecting to the database and starting the server.
    It also imports the routes from backend\routes\product.routes.js
    
*/

import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
dotenv.config()

import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import productRoutes from './routes/product.routes.js'
import userRoutes from './routes/user.routes.js'

const port = process.env.PORT || 5000

connectDB() // Connect to MongoDB

const app = express()

// Body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Cookie parser middleware
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('API is running...')
})

// This uses the routes from backend\routes\product.routes.js for the /api/products route
app.use('/api/products', productRoutes)
// This uses the routes from backend\routes\user.routes.js for the /api/users route
app.use('/api/users', userRoutes)

// This is used to handle errors
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

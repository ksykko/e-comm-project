/*
    This is the main file of the backend. It is responsible for connecting to the database and starting the server.
    It also imports the routes from backend\routes\product.routes.js
    
*/

import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
dotenv.config()

import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import productRoutes from './routes/product.routes.js'
import userRoutes from './routes/user.routes.js'
import orderRoutes from './routes/order.routes.js'
import uploadRoutes from './routes/upload.routes.js'

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

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)

app.get('/api/config/paypal', (req, res) => res.send({ clientId: process.env.PAYPAL_CLIENT_ID }))

const __dirname = path.resolve() // Get the current directory name
app.use('/uploads', express.static(path.join(__dirname, '/uploads'))) // Make the uploads folder static

// This is used to handle errors
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

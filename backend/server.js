/*
    This is the main file of the backend. It is responsible for connecting to the database and starting the server.
    It also imports the routes from backend\routes\product.routes.js
    
*/

import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import productRoutes from './routes/product.routes.js'

const port = process.env.PORT || 5000

connectDB() // Connect to MongoDB

const app = express()

app.get('/', (req, res) => {
    res.send('API is running...')
})

// This uses the routes from backend\routes\product.routes.js for the /api/products route
app.use('/api/products', productRoutes)

// This is used to handle errors
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

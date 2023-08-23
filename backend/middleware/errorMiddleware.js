/*
    This file is a middleware that is used to handle errors. 
*/

const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`) // Create a new error
    res.status(404) // Set the status to 404
    next(error) // Pass the error to the next middleware
}

const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode // Set the status code to 500 if it is not already 200
    let message = err.message // Set the message to the error message

    // Check for Mongoose errors
    if (err.name === 'CastError' && err.kind === 'ObjectId') {
        message = 'Resource not found.'
        statusCode = 404
    }

    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack, // Only show the stack trace in development
    })
}

export { notFound, errorHandler }

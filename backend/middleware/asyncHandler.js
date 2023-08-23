/*
    This file is used to create a wrapper for the async functions in the routes.
    Useful for mongoose functions as they return a promise and we don't have to use try/catch blocks.

    Middleware is a function that has access to the request and response objects. 
    It can execute any code, make changes to the request and response objects, end the request-response cycle, 
    or call the next middleware function in the stack.
    
*/

const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next)
}

export default asyncHandler

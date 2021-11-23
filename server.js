const express = require('express');
const dotenv = require('dotenv');
const bootcamps = require('./routes/bootcamps');
const errorHandler = require('./middleware/error')
const morgan = require('morgan')
const connectDB = require('./config/db')

dotenv.config({path: './config/config.env'});

const app = express();

connectDB();

app.use(express.json())

// dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use('/api/v1/bootcamps', bootcamps)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

const server = app.listen (
    PORT,
     console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`) 
);

//handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`error: ${err.message}`)
    server.close(() => process.exit(1));
})
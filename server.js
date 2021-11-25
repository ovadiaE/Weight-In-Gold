const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const value = require('./routes/route')



dotenv.config({path: './config/config.env'});
const app = express();
app.use(express.json())

// dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use('/api/v1/weightingold', value)


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

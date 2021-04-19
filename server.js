const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./server/database/connection')

const app = express()

dotenv.config({
    path: 'config.env'
})
const port = process.env.PORT || 8080

var corsOptions = {
    origin: 'http://localhost:8080'
}

connectDB()

app.use(cors(corsOptions))
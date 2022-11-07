const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

//@Middleware for accepting body Inputs
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/get', require('./routes/route'))

app.listen(port, () => console.log(`server started on port ${port}`))
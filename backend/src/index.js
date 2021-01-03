const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const path = require('path')

const connection = require('./database/connection')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(routes)

app.listen(3333)

const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const path = require('path')
const helmet = require('helmet')

const connection = require('./database/connection')

const app = express()

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(routes)

// console.log(process.env);

const port = process.env.PORT || 3333;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));


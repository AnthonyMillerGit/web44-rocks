require('dotenv').config() // this allows to inject fake environment variables

const { PORT } = require('./config')
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const server = express()

server.use(express.json())
server.use(cors())
server.use(helmet())

server.get('/', (req, res) => {
    res.send(`
    <h1>Server is live</h1>
    `)
})

server.use('*', (req, res) => {
    res.json({ 
        message: 'web44 rocks!'
    })
})

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})
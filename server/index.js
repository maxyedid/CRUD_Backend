const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const{ db } = require('./db')


const app = express()
const PORT = 3000

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

db.sync().then(() => {
    console.log('db synced')
    app.listen(PORT, () => {
        console.log("Connection Established")
    })
})
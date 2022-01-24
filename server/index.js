const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const {db} = require('./db')
const Student = require('./db/students')

const app = express()
const PORT = 5432


app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api', require('./api/index'))

 db.sync().then(() => {
    console.log('db synced')
    app.listen(PORT, () => {
        console.log("Connection Terminated")
    })
})
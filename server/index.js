const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const {db} = require('./db')
const Student = require('./db/students')

const app = express()
const PORT = 5000


app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

 db.sync().then(() => {
    Student.create({firstName: "max", lastName: "yedid", email: "maxyedid1@gmail.com", imageURL: "https://st3.depositphotos.com/4111759/13425/v/380/depositphotos_134255588-stock-illustration-empty-photo-of-male-profile.jpg?forcejpeg=true", gpa: 3.8})
    console.log('db synced')
    app.listen(PORT, () => {
        console.log("Connection Terminated, im sorry elizabeth")
    })
})
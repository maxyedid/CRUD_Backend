const Sequelize = require('sequelize')
const db = require('./database')

//Making table for the students model

//needs firstName, lastName, email, imageURL, and GPA
const Student = db.define('student', {
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            },
            allowNull: false
        },
        imageURL: {
            type: Sequelize.STRING,
            validate: {
                isURL: true
            },
            defaultValue: "https://st3.depositphotos.com/4111759/13425/v/380/depositphotos_134255588-stock-illustration-empty-photo-of-male-profile.jpg?forcejpeg=true",
            allowNull: false
        },
        gpa: {
            type: Sequelize.DECIMAL,
            allowNull: false
        }
})
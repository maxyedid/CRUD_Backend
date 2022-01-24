const Sequelize = require('sequelize')
const db = require('./database')

//Making table for the students model

//needs firstName, lastName, email, imageURL, and GPA
const Student = db.define('student', {
        firstName: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING(30),
            allowNull: false
        },

        //make sure the string is an email
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            },
            allowNull: false
          //  unique: true
        },
        //Check for valid url
        imageURL: {
            type: Sequelize.STRING,
            validate: {
                isURL: true
            },
            defaultValue: "https://st3.depositphotos.com/4111759/13425/v/380/depositphotos_134255588-stock-illustration-empty-photo-of-male-profile.jpg?forcejpeg=true",
            allowNull: true
        },
        //Making sure that gpa goes only up to one decimal place
        gpa: {
            type: Sequelize.DECIMAL(10, 1),
            validate: {
                min: 0,
                max: 4
            },
            allowNull: false
        }
})

module.exports = Student
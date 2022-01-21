const Sequelize = require('sequelize')
const db = require('./database')

//Making table for campus model

//has a name, imageUrl, address, and description

const Campus = db.define('campus', {
    name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        validate: {
            isURL: true
        },
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT
    }
})

module.exports = Campus;
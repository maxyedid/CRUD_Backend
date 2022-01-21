const Sequelize = require('sequelize')
const db = require('./database')

//Campus model

//has a name, imageUrl, address, and description

const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        isUnique: true
    },
    //Make sure it is a url
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
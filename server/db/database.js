const Sequelize = require('sequelize')

const pkg = require('../../package.json')


//Creating database url for the api
const db = new Sequelize('students', 'postgres', 'ready482', {
        host: 'localhost',
        dialect: 'postgres'
        }
)

module.exports = db;
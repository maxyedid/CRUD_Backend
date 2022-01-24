const Sequelize = require('sequelize')

const pkg = require('../../package.json')


//Creating database url for the api
const db = new Sequelize('postgres://postgres:ready482@localhost:5432/students', {
        host: 'localhost',
        dialect: 'postgres'
        }
)

module.exports = db;
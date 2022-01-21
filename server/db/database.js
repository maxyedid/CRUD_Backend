const Sequelize = require('sequelize')

const pkg = require('../../package.json')


//Creating database url for the api
const db = new Sequelize(
    process.env.DATABASE_url || `postgres:localhost:3000/${pkg.name}`,
    {
        logging: false
    }
)

module.exports = db;
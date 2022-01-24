const db = require('./database')
const Student = require('./students')
const Campus = require('./campus')

//associations

//Student.belongsTo(Campus)

module.exports = {
    db,
    Student,
    Campus
}
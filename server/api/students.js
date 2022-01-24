const router = require('express').Router()

const {Student} = require('../db')

router.get('/students', async (req, res) => {
    try {
        const students = await Student.findAll()
        res.status(200).send(students)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

router.post('/addS', async (req, res) => {
    try {
        const newStudent = await Student.create(req.body)
        res.json(newStudent)
    } catch (error) {
        res.send(error.message)
    }
})

module.exports = router;
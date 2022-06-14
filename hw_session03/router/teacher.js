const express = require('express')
const teacherRouter = express.Router()

const teachers = [
    {
        id: 1,
        name: 'Dung',
        age: 30
    },
    {
        id: 2,
        name: 'Dai',
        age: 29
    },
    {
        id: 3,
        name: 'Quan',
        age: 25
    },
]

teacherRouter.post('/', (req, res, next) => {
    res.json(teachers)
    next()
})

module.exports = teacherRouter;
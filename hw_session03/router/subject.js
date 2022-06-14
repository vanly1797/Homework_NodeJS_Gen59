const express = require('express')
const subjectRouter = express.Router()

const subjects = [
    {
        id: 1,
        name: 'Toan'
    },
    {
        id: 2,
        name: 'Van'
    },
    {
        id: 3,
        name: 'Anh'
    },
]

subjectRouter.post('/', (req, res, next) => {
    res.json(subjects)
    next()
})

module.exports = subjectRouter;
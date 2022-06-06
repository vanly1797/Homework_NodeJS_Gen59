const express = require('express')
const teacherRouter = express.Router()

const teachers = [
    {
        id: 1,
        name: 'Tuan',
        job: 'teacher'
    },
    {
        id: 2,
        name: 'Minh',
        job: 'teacher'
    },
    {
        id: 3,
        name: 'Vu',
        job: 'teacher'
    },
]

teacherRouter.get('', (req, res) => {
    res.json(teachers)
})

teacherRouter.post('', (req, res) => {
    let { id, name, job } = req.body;
    if (!name) {
        name = "default name"
    }
    if (!job) {
        job = "default job"
    }
    teachers.push({
        id: id,
        name: name,
        job: job
    })
    res.status(201)
    res.json(teachers)
})

teacherRouter.put('', (req, res) => {
    teachers[1].name = 'Khang'
    teachers[1].job = 'principal'
    res.json(teachers)
})

teacherRouter.delete('', (req, res) => {
    teachers.pop()
    res.json(teachers)
})

module.exports = teacherRouter
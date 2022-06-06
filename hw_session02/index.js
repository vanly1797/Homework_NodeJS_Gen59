const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const teacherRouter = require('./router/teacher')

app.use(bodyParser.json({ extended: true }))
app.get('/', (req, res) => {
    res.send('Hello World! MindX_Homework_Session2')
})

app.use('/teacher', teacherRouter)

app.listen(port, () => {
    console.log(`Example app listening on ${port}`)
})
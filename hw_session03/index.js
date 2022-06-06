const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const studentRouter = require('./router/student')
const teacherRouter = require('./router/teacher')
const subjectRouter = require('./router/subject')

const loginMiddleWare = require('./middleware/login_middleware')

app.use(bodyParser.json({ extended: true }));
app.use('/student', studentRouter)
app.use('/teacher', teacherRouter)
app.use('/subject', subjectRouter)

app.use('/', loginMiddleWare, (req, res) => {
    res.json('Success')
})


app.listen(port, (err) => {
    if (err) {
        return;
    }
    console.log(`Application is running on ${port}`);
})
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const studentRouter = require('./router/student')
const teacherRouter = require('./router/teacher')
const subjectRouter = require('./router/subject')

const loginMiddleWare = require('./middleware/login_middleware')
const logTimeMiddleWare = require('./middleware/logtime_middleware')
const countMiddleWare = require('./middleware/count_middleware')

app.use(bodyParser.json({ extended: true }));

app.use('/student', logTimeMiddleWare, loginMiddleWare, studentRouter, countMiddleWare)
app.use('/teacher', logTimeMiddleWare, loginMiddleWare, teacherRouter, countMiddleWare)
app.use('/subject', logTimeMiddleWare, loginMiddleWare, subjectRouter, countMiddleWare)

app.listen(port, (err) => {
    if (err) {
        return;
    }
    console.log(`Application is running on ${port}`);
})
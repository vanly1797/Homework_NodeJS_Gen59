const e = require("express");

const countObject =
    [
        { user: 'alice', student: 0, teacher: 0, subject: 0 },
        { user: 'bob', student: 0, teacher: 0, subject: 0 },
        { user: 'charlie', student: 0, teacher: 0, subject: 0 }
    ];

function countMiddleWare(req, res, next) {
    console.log('User: ', req.body.username);

    for (let i = 0; i < countObject.length; i++) {
        if (countObject[i].user === req.body.username && req.baseUrl === '/student') {
            countObject[i].student++;
        } else if (countObject[i].user === req.body.username && req.baseUrl === '/teacher') {
            countObject[i].teacher++;
        } else if (countObject[i].user === req.body.username && req.baseUrl === '/subject') {
            countObject[i].subject++;
        }
    }
    console.log(countObject);

}

module.exports = countMiddleWare;
const users = [
    { username: 'alice', apiKey: 'alice@123' },
    { username: 'bob', apiKey: 'bob@123' },
    { username: 'charlie', apiKey: 'charlie@123' }
]

function loginMiddleWare(req, res, next) {
    const index = users.findIndex((el) => {
        return (JSON.stringify(el.username) === JSON.stringify(req.body.username) &&
            JSON.stringify(el.apiKey) === JSON.stringify(req.body.apiKey))
    })
    const isNotLogin = index < 0
    if (isNotLogin) {
        res.status(401)
        res.send('Unauthonized')
        return
    }
    console.log('req from client', req);
    next()
}

module.exports = loginMiddleWare;
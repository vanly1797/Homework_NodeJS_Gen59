const jwt = require('jsonwebtoken')

const jwtMdw = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        var decoded = jwt.verify(token, 'PRIVATE_KEY');
        if (decoded) {
            req.username = decoded.username
            next()
        }
    } catch (err) {
        res.status(401).send("Invalid Token")
    }
}

app.post('/students', jwtMdw, (req, res) => {
    console.log(req.username)
    res.json(students)
})
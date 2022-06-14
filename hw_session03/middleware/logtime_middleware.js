function logTimeMiddleWare(req, res, next) {
    console.log('New loggin at: ', new Date());
    next()
}

module.exports = logTimeMiddleWare



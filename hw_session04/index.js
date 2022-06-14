const express = require("express")
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json({ extended: true }));

app.listen(port, (err) => {
    if (err) {
        return;
    }
    console.log(`Application is running on ${port}`);
})
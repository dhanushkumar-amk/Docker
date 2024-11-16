const express  = require("express")
const app = express()
const port = 3000
const path = require('path')

const instanceApplication = process.env.APP_NAME

// app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log("request served by " + instanceApplication);

})

app.listen(port, () => {
    console.log( instanceApplication+ " is listening on port " + port);
})

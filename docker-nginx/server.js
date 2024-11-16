const express  = require("express")
const app = express()
const port = 3000
const path = require('path')

// app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log("request server by nodejs application");

})

app.listen(port, () => {
    console.log("The server is listening on port " + port);
})

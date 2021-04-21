const express = require('express');
const bodyParser = require('body-parser');
const sentEmail = require('./functions/sendEmail');

let app = express();
let PORT = 5000;

app.use('/api', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
    next();
});
app.use(bodyParser.json());

app.post('/api/contact/comment', (req, res) => {
    console.log("INSIDE EXPRESS POST", req.body.comment);
    sentEmail.send(req.body.comment);
    res.end("success");
});

app.listen(PORT, console.log("Express Listening on port: ", PORT));
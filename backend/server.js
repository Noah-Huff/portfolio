const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sendEmail = require('./functions/sendEmail');
const dotenv = require('dotenv');

dotenv.config();

let app = express();
let PORT = process.env.PORT;

app.use('/api', (req, res, next) => {
    console.log("Process ", process.env.NODE_ENV);
    res.header("Access-Control-Allow-Origin", process.env.CORS);

    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
    next();
});
app.use(bodyParser.json());

app.get("/api/test", (req, res) => {
    res.end("Successful test!");
});

app.post('/api/contact/comment', (req, res) => {
    console.log("INSIDE EXPRESS POST", req.body.comment);
    sendEmail.send(req.body.comment, req.body.name, req.body.email);
    res.end("success");
});

const __dir = path.resolve();
if(process.env.NODE_ENV === 'production') {
    console.log("PRODUCTION");

    app.use(express.static(path.join(__dir, 'portfolio-front/build')));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dir, 'portfolio-front', 'build', 'index.html')));
}
console.log("ENV ", process.env.NODE_ENV);
console.log("CORS ", process.env.CORS);

app.listen(PORT, console.log("Express Listening on port: ", PORT));
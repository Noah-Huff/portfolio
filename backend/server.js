const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sentEmail = require('./functions/sendEmail');

let app = express();
let PORT = process.env.PORT;

app.use('/api', (req, res, next) => {
    if (process.env.NODE_ENV == 'production') {
        console.log("Production CORS");
        res.header("Access-Control-Allow-Origin", `Origin: https://noahhuff.herokuapp.com`);
    } else {
        res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    }
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
    next();
});
app.use(bodyParser.json());

app.post('/api/contact/comment', (req, res) => {
    console.log("INSIDE EXPRESS POST", req.body.comment);
    sentEmail.send(req.body.comment, req.body.name, req.body.email);
    res.end("success");
});


const __dir = path.resolve();
if(process.env.NODE_ENV === 'production') {
    console.log("PRODUCTION");

    app.use(express.static(path.join(__dir, 'portfolio-front/build')));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dir, 'portfolio-front', 'build', 'index.html')));
}
console.log("ENV ", process.env.NODE_ENV);

app.listen(PORT, console.log("Express Listening on port: ", PORT));
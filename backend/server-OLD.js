const http = require('http');
const sendEmail = require('./functions/sendEmail');
//const express = require('express');
require('dotenv').config();

const PORT = 5000;
console.log("Server running on port: ", PORT);

//const app = express();

const server = http.createServer((req, res) => {
    let myCors = (access) => {
        res.setHeader('Access-Control-Allow-Origin', access)
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        //res.setHeader('Accept', 'application/json');
    }
    if (req.url == '/api/contact/comment') {
        myCors("http://localhost:3000");
        //console.log("REQ METHOD ", req.method);
        let body = "";
        req.on("data", function (chunk) {
            body += chunk;
        });

        req.on("end", function () {
            //res.writeHead(200, { "Content-Type": "text/html" });
            let bodyString = JSON.stringify(body);
            console.log("BODY STRING ", bodyString);
            let bodyJSON = JSON.parse(bodyString);
            console.log("BODY JSON ", bodyJSON);
            console.log("BODY EMAIL ", body.trim());
            res.end("Success!");
        });


        //sendEmail.send();
    }
    //res.write("here you are");
    //res.end(" finished");
});

server.listen(PORT);
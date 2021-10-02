const nodeMailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

require('dotenv').config();

const send = (userComment, userName, userEmail) => {
    const transporter = nodeMailer.createTransport(smtpTransport({
        //service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        authMethod: 'PLAIN',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PSW
        }
    }));
    let mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: "noahhuff.herokuapp.com Comment",
        text: userName + " Says: \n\n" + userComment + "\n\nFrom: " + userEmail
    };
    console.log("USER COMMENT ", userComment);
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Mail Send Error: ", error);
        } else {
            console.log("The email was sent successfully!");
        }
    });
}

module.exports = {
    send
};
const nodeMailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

require('dotenv').config();

const send = (userComment) => {
    const transporter = nodeMailer.createTransport(smtpTransport({
        //service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        //authMethod: 'PLAIN',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PSW
        }
    }));
    let mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: 'TESTING',
        text: userComment
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
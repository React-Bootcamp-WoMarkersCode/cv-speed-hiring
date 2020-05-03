const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
admin.initializeApp();

/**
* Here we're using Gmail to send 
*/
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: "587",
    secure: false,
    auth: {
        user: "contato.collective.hiring@gmail.com",
        pass: "$2NMjvs8Il"
    }
});

exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {

        // getting email email by query string
        const email = req.body.email;

        const mailOptions = {
            from: 'Collective Hiring <contato.collective.hiring@gmail.com>',
            to: email,
            subject: 'Chave de acesso', // email subject
            html: `<p style="font-size: 16px;">Sua solicitação foi aprovada!</p>
                    <p style="font-size: 14px;">Sua chave de acesso é: 985640</p> 
                <br />
                <img src="https://media.giphy.com/media/YnBntKOgnUSBkV7bQH/giphy.gif"/>
            ` // email content in HTML
        };

        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if (erro) {
                return res.send(erro.toString());
            }
            return res.send('Enviado!');
        });
    });
});
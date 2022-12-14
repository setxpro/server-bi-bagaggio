const nodemailer = require("nodemailer")

const SMTP_CONFIG = require('../Config/smtp')

const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass
    },
    tls: {
        rejectUnauthorized: false,
    }
})

async function sendEmail(count) {
    const mailSent = await transporter.sendMail({
        subject: 'Fluxo de dados',
        text: `Sucesso! Foi cadastrado no banco ${count} registros`,
        from: 'NodeJS <patrick.anjos@bagaggio.com.br>',
        to: ['zendteamdev@gmail.com', 'developerseven77@gmail.com', 'patrick.anjos@bagaggio.com.br']
    });
    console.log(mailSent)
    return mailSent;
}

module.exports = sendEmail;
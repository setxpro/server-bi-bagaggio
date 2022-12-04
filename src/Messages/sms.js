const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

function sendSMS(count) {
    client.messages.create({
        body: `Sucesso! Foi cadastrado no banco ${count} registros`,
        from: process.env.TWILIO_NUMBER,
        to: process.env.TWILIO_SEND_TO
    })
    .then(message => console.log(message.sid))
    .catch(err => console.log(err))
}

module.exports = sendSMS;
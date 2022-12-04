require('dotenv').config()
const express = require('express');
const cors = require('cors');
const sendEmail = require('./Messages/email');
const sendSMS = require('./Messages/sms');
const app = express();

app.use(express.json());
app.use(cors());

const data = [
    {id: 1, name: 'uma loja'},
    {id: 2, name: 'uma loja'},
    {id: 3, name: 'uma loja'},
    {id: 4, name: 'uma loja'},
]

function ing() {
    let items = data.length;
    if (items > 1) {
        sendEmail(items)
        sendSMS(items)
    }
}

ing();

app.use('/api/bagaggio', () => {})

app.listen(process.env.PORT || 3333, () => {
    console.log(`Sever running at port ${process.env.PORT}`)
})
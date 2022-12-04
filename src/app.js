require('dotenv').config()
const express = require('express');
const cors = require('cors');
const sendEmail = require('./Messages/email');
const app = express();

app.use(express.json());
app.use(cors());

function ing() {
    sendEmail()
}

// ing();

app.use('/api/bagaggio', () => {})

app.listen(process.env.PORT || 3333, () => {
    console.log(`Sever running at port ${process.env.PORT}`)
})
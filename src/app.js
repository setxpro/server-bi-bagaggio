require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/bagaggio', () => {})

app.listen(process.env.PORT || 3333, () => {
    console.log(`Sever running at port ${process.env.PORT}`)
})
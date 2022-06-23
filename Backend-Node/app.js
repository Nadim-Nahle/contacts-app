const userRouter = require('./app/routes')
const express = require('express');
const app= express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const DB_CONNECTION = process.env.DB_CONNECTION;
app.use(bodyParser.json())



app.use('/api', userRouter);


//DB CONNECTION
mongoose.connect(DB_CONNECTION, () =>
    console.log('db connected')
)

app.listen(4000);


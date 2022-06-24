const userRouter = require('./app/routes');
const cors = require('cors');
const express = require('express');
const app= express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const DB_CONNECTION = process.env.DB_CONNECTION;
app.use(bodyParser.json())






//DB CONNECTION
mongoose.connect(DB_CONNECTION, () => {
    try{
        console.log('db connected');
    }
    catch(error){
        console.log('error');
    }
}
    
)
app.use(cors());
app.use(express.json());

app.use('/api', userRouter);

app.listen(4000);


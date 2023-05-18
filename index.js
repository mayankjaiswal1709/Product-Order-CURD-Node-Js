const express = require('express');
require('dotenv').config()
require('./models/config')
const app = express()
const order = require('./routes/orderRoutes')
const product = require('./routes/productRoutes')
app.use(express.json());




app.use('/', product);
app.use('/order', order);

console.log('helo env is running', process.env.port);
app.listen(process.env.port, (req, res) => {
    console.log(`server is running on port :${process.env.port}`);
}) 
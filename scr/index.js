const express = require('express');
require('dotenv').config();
const userController = require ('./controllers/userController');
const rolController = require ('./controllers/rolController');

const app = express();
app.use(express.json());

app.use('/api/users', userController);
app.use('/api/rol',rolController);

const port = 3000;

app.listen(port, ()=>{
console.log(`servidor corriento en http://localhost:${port}`)
})
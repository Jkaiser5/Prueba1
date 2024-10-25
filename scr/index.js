const express = require('express');
require('dotenv').config();
const userController = require ('./controllers/userController');

const app = express();
app.use(express.json());

app.use('/api/users', userController);

const port = 3000;

app.listen(port, ()=>{
console.log(`servidor corriento en http://localhost:${port}`)
})
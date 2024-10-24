const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('!hola mundo de los sapiens........!');

});

app.listen(port, ()=>{
console.log(`servidor corriento en http://localhost:${port}`)

})
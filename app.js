const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.static('López_Katerin_Despliegue'));

app.listen(PORT, ()=>{
    console.log('Servidor escuchando en http://localhost:${PORT}');
});
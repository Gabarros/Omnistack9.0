const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

// GET, POST, PUT, DELETE

// req.query = Acessar querys params (Para filtros)
// req.params =  Acessar route params (Para edição)
// req.body = Acessar corpo da requisição (Criação e edição)
// app.get('/users/:id', (req, res)=>{

//     for(let i in usuarios){
//         if(usuarios[i].id == req.params.id){
//         return res.json({ nome: usuarios[i].nome });
//     }
//     }
// });

app.use(express.json());
app.use(routes);

app.listen(3333);


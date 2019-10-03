const express = require('express');

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
app.post('/users', (req, res)=>{

    return res.json(req.body);

});

app.listen(3333);

let usuarios = [];
usuarios.push({id: 1, nome: "Gabriel", email: "gabarros17", idade: 23});

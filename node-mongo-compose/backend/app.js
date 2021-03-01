const express = require('express')
const restful = require('node-restful')
const serve = express()
const mongoose = restful.mongoose

// Database
mongoose.Promise = global.Promise
// db é o servidor da base de dados
// ele será incluido no compose
// no compose, o serviço do mongo tem que ter esse nome
// caso contrário, o app quebra 
mongoose.connect('mongodb://db/mydb')

// Teste do backend
// Manda pelo response uma string
// Só é bem sucedida se conectar com o mongo antes
serve.get('/', (req,res,next) => res.send('Backend'))

//Starta o serve na porta 3000
serve.listen(3000)
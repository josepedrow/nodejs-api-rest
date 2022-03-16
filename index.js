//chamar modulos
const express = require("express");

//criar um aplicativo
const app = express();

//subir para o servidor
//definida porta e uma função retorno
app.listen(3000, () => console.log("servidor rodando na porta 3000"));

//rodar o servidor no terminal

//req solicitado, res responda
app.get("/atendimentos", (req, res) => res.send("Você está na rota de atendimentos")); // /atendimentos será uma página
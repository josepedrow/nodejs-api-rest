//chamar modulos
const express = require("express");

//criar um aplicativo
const app = express();

//subir para o servidor
//definida porta e uma função retorno
app.listen(3000, () => console.log("servidor rodando na porta 3000"));

//rodar o servidor no terminal

//req solicitado, res responda
//usando o nodemon as atualizações do servidor são automáticas agora
app.get("/atendimentos", (req, res) => res.send("Você está na rota de atendimentos e está realizando um get")); // /atendimentos será uma página
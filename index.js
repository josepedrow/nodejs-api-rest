//SUBIR O SERVIDOR NO AR

const customExpress = require('./config/custon-express');

const app = customExpress();

//subir para o servidor
//definida porta e uma função retorno
app.listen(3000, () => console.log("servidor rodando na porta 3000"));

//rodar o servidor no terminal
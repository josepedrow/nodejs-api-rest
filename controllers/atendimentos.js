//controller de atendimento


//para exportar o módulo
module.exports = app => {

    //GERENCIAR ROTA DE ATENDIMENTO
    //req solicitado, res responda
    //usando o nodemon as atualizações do servidor são automáticas agora
    app.get("/atendimentos", (req, res) => res.send("Você está na rota de atendimentos e está realizando um get")); // /atendimentos será uma página

}
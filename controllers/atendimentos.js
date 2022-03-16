//controller de atendimento


//para exportar o módulo
module.exports = app => {

    //GERENCIAR ROTA DE ATENDIMENTO
    //req solicitado, res responda
    //usando o nodemon as atualizações do servidor são automáticas agora
    app.get("/atendimentos", (req, res) => res.send("Você está na rota de atendimentos e está realizando um GET")); // /atendimentos será uma página

    //cliente enviando algo
    app.post("/atendimentos", (req, res) => {
        console.log(req.body)
        res.send("Você está na rota de atendimento e está realizando um POST")

    })

}
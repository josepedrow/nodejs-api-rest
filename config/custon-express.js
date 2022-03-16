//CONFIGURAÇÕES

//chamar modulos, importá-los
const express = require("express");
const consign = require("consign");

module.exports = () => {

    //criar um aplicativo
    const app = express();

    //modulos de controles para serem acessados pelo app
    consign()
        .include("controllers")
        .into(app)

    return app

}
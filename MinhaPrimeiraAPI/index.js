const express = require ("express");
const app = express();

app.get("/produtos", function(request, response) {
    response.status(200).json({
        "id_produto": 1,
        "descricao": "Produto 01"
    });
});

app.get("/produtos", function(request, response) {
    response.status(200).send("Minha primeira Conexão API");
});

app.listen(3000, function(){
    console.log("Servidor Execultado na porta 3000");
})

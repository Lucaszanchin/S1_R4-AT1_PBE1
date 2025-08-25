const express = require("express");
const app = express();
const PORT = 3006;

app.get("/imc", (req, res) => {

    try {
        const {peso, altura} = req.query;
        const pes = parseFloat(peso);
        const alt = parseFloat(altura);

        if (pes === "" || alt === "") return res.send("Coloque seu peso e altura");

        const imc = pes / (alt * alt);

        let categorias;

        if (imc < 18.5) categorias = "Magreza";

        else if (imc < 25) categorias = "Peso normal";

        else if (imc < 30) categorias = "Sobrepeso";

        else categorias = "Obesidade";

        res.send(`A categoria do seu IMC está em: ${imc.toFixed(2)} - ${categorias}`);

    } catch (error) {

        console.error(`Erro ao fazer a multiplicação: ${error}`)
        res.status(500).send("Erro ao processar a requisição!")

    }


});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});

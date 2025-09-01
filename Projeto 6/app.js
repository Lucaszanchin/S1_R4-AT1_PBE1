const express = require("express"); //Importa o framework Express para criar o servidor HTTP
const app = express(); //Cria a aplicação Express, que será usada para definir rotas e configurar o servidor
const PORT = 3006; //Declara a porta do servidor

app.get("/imc", (req, res) => {

    try {
        const {peso, altura} = req.query; //Desestrutura os parâmetros enviados na URL e definará peso e altura como query
        const pes = parseFloat(peso);
        const alt = parseFloat(altura);

        if (pes === "" || alt === "") return res.send("Coloque seu peso e altura");

        const imc = pes / (alt * alt); //Aqui será feita a conta do imc

        let categorias;

        if (imc < 18.5) categorias = "Magreza";

        else if (imc < 25) categorias = "Peso normal";

        else if (imc < 30) categorias = "Sobrepeso";

        else categorias = "Obesidade";

        res.status(200).send(`A categoria do seu IMC está em: ${imc.toFixed(2)} - ${categorias}`); //Aqui irá mostrar o status 200, que é quando a requisição é feita com sucesso

    } catch (error) {

        console.error(`Erro ao fazer a multiplicação: ${error}`)  //Mostrará caso ocorrer erro no servidor
        res.status(500).send("Erro ao processar a requisição!")

    }


});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});

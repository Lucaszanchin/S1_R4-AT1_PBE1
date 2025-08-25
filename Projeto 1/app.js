const express = require('express');
const app = express();
const PORT = 8081;
const error = ("Erro ao fazer a requsição!")

app.get("/soma/:num1/:num2", (req, res) => {
    try {
        const { num1, num2 } = req.params


        soma = parseFloat(num1) + parseFloat(num2)

        if (num1 == undefined || num2 == undefined || isNaN (num1) || isNaN (num2)) {
            return res.status(400).send("Os parâmetros num1 e num2 são obrigatórios!!")
        }

        res.status(200).send(`Olá, o resultado da soma ${num1} + ${num2} é igual a ${soma}.`);

    } catch (error) {

        console.error(`Erro ao dizer ao fazer a soma: ${error}`)
        res.status(500).send("Erro ao processar a requisição!")

    }
})

app.get("/subtracao/:num1/:num2", (req, res) => {
    try {
        const { num1, num2 } = req.params

        subtracao = parseFloat(num1) - parseFloat(num2)

        if (num1 == undefined || num2 == undefined || isNaN (num1) || isNaN (num2)) {
            return res.status(400).send("Os parâmetros num1 e num2 são obrigatórios!!")
        }

        res.status(200).send(`Olá, o resultado da subtração ${num1} - ${num2} é igual a ${subtracao}.`);

    } catch (error) {

        console.error(`Erro ao dizer ao fazer a subtração: ${error}`)
        res.status(500).send("Erro ao processar a requisição!")

    }
})

app.get("/multiplicacao/:num1/:num2", (req, res) => {
    try {
        const { num1, num2 } = req.params


        multiplicação = parseFloat(num1) * parseFloat(num2)

        if (num1 == undefined || num2 == undefined || isNaN (num1) || isNaN (num2)) {
            return res.status(400).send("Os parâmetros num1 e num2 são obrigatórios!!")
        }

        res.status(200).send(`Olá, o resultado da multiplicação ${num1} x ${num2} é igual a ${multiplicação}.`);

    } catch (error) {

        console.error(`Erro ao dizer ao fazer a multiplicação: ${error}`)
        res.status(500).send("Erro ao processar a requisição!")

    }
})

app.get("/divisao/:num1/:num2", (req, res) => {
    try {
        const { num1, num2 } = req.params

        divisao = parseFloat(num1) / parseFloat(num2)

        if (num1 == undefined || num2 == undefined || isNaN (num1) || isNaN (num2)) {
            return res.status(400).send("Os parâmetros num1 e num2 são obrigatórios!!")
        }
        res.status(200).send(`Olá, o resultado da divisão ${num1} / ${num2} é igual a ${divisao}.`);

    } catch (error) {

        console.error(`Erro ao dizer ao fazer a soma: ${error}`)
        res.status(500).send("Erro ao processar a requisição!")

    }
})



app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});

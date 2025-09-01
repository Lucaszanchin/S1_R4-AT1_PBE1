const express = require('express'); //Importa o framework Express para criar o servidor HTTP
const app = express(); //Cria a aplicação Express, que será usada para definir rotas e configurar o servidor
const PORT = 8081; //Declara a porta do servidor
const error = ("Erro ao fazer a requsição!") //É mostrado quando ocorre algum erro de requisição

app.get("/soma/:num1/:num2", (req, res) => {  //Essa é a rota que é utilizada do Express que recebe dois parâmetros de URL
    try {
        const { num1, num2 } = req.params //Desestrutura os parâmetros enviados na URL, definidas como params


        soma = parseInt(num1) + parseInt(num2) //Faz a soma do num 1 e num2 escolhidos pelo cliente

        if (num1 == undefined || num2 == undefined || isNaN (num1) || isNaN (num2)) { //Aqui será feita a validação, se algum estiver indefinido ou não for número, vai dar erro e será enfiado ao cliente o erro 400
            return res.status(400).send("Os parâmetros num1 e num2 são obrigatórios!!")
        }

        res.status(200).send(`Olá, o resultado da soma ${num1} + ${num2} é igual a ${soma}.`); //Aqui irá mostrar o status 200, que é quando a requisição é feita com sucesso

    } catch (error) {

        console.error(`Erro ao fazer a soma: ${error}`) //Mostrará caso ocorrer erro no servidor
        res.status(500).send("Erro ao processar a requisição!")

    }
})

app.get("/subtracao/:num1/:num2", (req, res) => { //Essa é a rota que é utilizada do Express que recebe dois parâmetros de URL
    try {
        const { num1, num2 } = req.params //Desestrutura os parâmetros enviados na URL

        subtracao = parseInt(num1) - parseInt(num2) //Faz a subtração do num 1 e num2 escolhidos pelo cliente

        if (num1 == undefined || num2 == undefined || isNaN (num1) || isNaN (num2)) { //Aqui será feita a validação, se algum estiver indefinido ou não for número, vai dar erro e será enfiado ao cliente o erro 400
            return res.status(400).send("Os parâmetros num1 e num2 são obrigatórios!!")
        }

        res.status(200).send(`Olá, o resultado da subtração ${num1} - ${num2} é igual a ${subtracao}.`); //Aqui irá mostrar o status 200, que é quando a requisição é feita com sucesso

    } catch (error) {

        console.error(`Erro ao fazer a subtração: ${error}`) //Mostrará caso ocorrer erro no servidor

    }
})

app.get("/multiplicacao/:num1/:num2", (req, res) => { //Essa é a rota que é utilizada do Express que recebe dois parâmetros de URL
    try {
        const { num1, num2 } = req.params //Desestrutura os parâmetros enviados na URL



        multiplicação = parseInt(num1) * parseInt(num2) //Faz a multiplicação do num 1 e num2 escolhidos pelo cliente

        if (num1 == undefined || num2 == undefined || isNaN (num1) || isNaN (num2)) { //Aqui será feita a validação, se algum estiver indefinido ou não for número, vai dar erro e será enfiado ao cliente o erro 400
            return res.status(400).send("Os parâmetros num1 e num2 são obrigatórios!!")
        }

        res.status(200).send(`Olá, o resultado da multiplicação ${num1} x ${num2} é igual a ${multiplicação}.`); //Aqui irá mostrar o status 200, que é quando a requisição é feita com sucesso

    } catch (error) {

        console.error(`Erro ao fazer a multiplicação: ${error}`) //Mostrará caso ocorrer erro no servidor
        res.status(500).send("Erro ao processar a requisição!")

    }
})

app.get("/divisao/:num1/:num2", (req, res) => { //Essa é a rota que é utilizada do Express que recebe dois parâmetros de URL
    try {
        const { num1, num2 } = req.params //Desestrutura os parâmetros enviados na URL

        divisao = parseInt(num1) / parseInt(num2) //Faz a divisão do num 1 e num2 escolhidos pelo cliente

        if (num1 == undefined || num2 == undefined || isNaN (num1) || isNaN (num2)) { //Aqui será feita a validação, se algum estiver indefinido ou não for número, vai dar erro e será enfiado ao cliente o erro 400
            return res.status(400).send("Os parâmetros num1 e num2 são obrigatórios!!")
        }
        res.status(200).send(`Olá, o resultado da divisão ${num1} / ${num2} é igual a ${divisao}.`); //Aqui irá mostrar o status 200, que é quando a requisição é feita com sucesso

    } catch (error) {

        console.error(`Erro ao fazer a soma: ${error}`) //Mostrará caso ocorrer erro no servidor
        res.status(500).send("Erro ao processar a requisição!")

    }
})



app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});

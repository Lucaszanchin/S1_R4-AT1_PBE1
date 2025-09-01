const express = require("express"); //Importa o framework Express para criar o servidor HTTP
const app = express(); //Cria a aplicação Express, que será usada para definir rotas e configurar o servidor
const PORT = 3002; //Declara a porta do servidor

app.get("/calculadora", (req, res) => { //Essa é a rota que é utilizada do Express que recebe dois parâmetros de URL
  try {

    const { operacao, numUm, numDois } = req.query;  // Aqui será feita a destruturação para criar as três variáveis, definidas como query
    const n1 = parseInt(numUm); 
    const n2 = parseInt(numDois);


    if (n1 == undefined || n2 == undefined || isNaN (n1) || isNaN (n2)) {     //Aqui será feita a validação, se algum estiver indefinido ou não for número, vai dar erro e será enfiado ao cliente o erro 400
      return res.status(400).send("Erro: informe apenas números válidos, por favor.");
    }

    let resultado; 

    if (operacao === "soma") {      

      resultado = n1 + n2;

    } else if (operacao === "subtracao") {

      resultado = n1 - n2;

    } else if (operacao === "multiplicacao") {

      resultado = n1 * n2;

    } else if (operacao === "divisao") {

      if (n2 === 0) {
        return res.status(400).send("Erro não é possível fazer divisão por zero!");
      }

      resultado = n1 / n2;

    } else {

      return res.status(400).send("Operação inválida!");

    }

    res.status(200).send(`O resultado ${operacao} é igual a ${resultado}`); //Aqui irá mostrar o status 200, que é quando a requisição é feita com sucesso

  } catch (erro) {

    console.error(`Erro ao fazer a conta  ${erro}`) //Mostrará caso ocorrer erro no servidor
    res.status(500).send("Erro ao processar a requisição!")

  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
});

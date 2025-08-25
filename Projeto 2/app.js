const express = require("express");
const app = express();
const PORT = 3002;

app.get("/calculadora", (req, res) => {
  try {

    const { operacao, numUm, numDois } = req.query;     
    const n1 = parseInt(numUm); 
    const n2 = parseInt(numDois);


    if (isNaN(n1) || isNaN(n2)) {     

      return res.send("Erro: informe apenas números válidos, por favor.");
    }

    let resultado;

    if (operacao === "soma") {      // Condições de cada operação

      resultado = n1 + n2;

    } else if (operacao === "subtracao") {

      resultado = n1 - n2;

    } else if (operacao === "multiplicacao") {

      resultado = n1 * n2;

    } else if (operacao === "divisao") {

      if (n2 === 0) {
        return res.send("Erro não é possível fazer divisão por zero!");
      }

      resultado = n1 / n2;

    } else {

      return res.send("Operação inválida!");

    }

    res.send(`O resultado ${operacao} é igual a ${resultado}`);

  } catch (erro) {

    console.error(`Erro ao fazer a conta  ${erro}`)
    res.status(500).send("Erro ao processar a requisição!")

  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
});

const express = require("express");
const app = express();
const PORT = 3003;

app.get("/operacao/:tipo", (req, res) => {
  try {
    const { tipo } = req.params;
    const { numUm, numDois } = req.query;

    const n1 = parseInt(numUm);
    const n2 = parseInt(numDois);
    let resultado;

    if (isNaN(n1) || isNaN(n2)) {
      throw new Error("Parâmetros inválidos. Coloque números por favor.");
    }

    if (tipo === "soma") {

      resultado = n1 + n2;

    } else if (tipo === "subtracao") {

      resultado = n1 - n2;

    } else if (tipo === "multiplicacao") {

      resultado = n1 * n2;

    } else if (tipo === "divisao") {

      if (n2 === 0) {

        throw new Error("Não é possível fazer divisão por zero.");

      }
      resultado = n1 / n2;

    } else {

      throw new Error("Operação inválida.");
    }

    res.send(`Resultado do cáculo da ${tipo} é ${resultado}`);

  } catch (erro) {

    console.error(`Erro ao fazer a conta. ${erro}`)
    res.status(500).send("Erro ao processar a requisição!")

  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

const express = require("express"); //Importa o framework Express para criar o servidor HTTP
const app = express(); //Cria a aplicação Express, que será usada para definir rotas e configurar o servidor
const PORT = 3003; //Declara a porta do servidor

app.get("/operacao/:tipo", (req, res) => {
  try {
    const { tipo } = req.params; //Desestrutura os parâmetros enviados na URL, será definida como params o tipo e numUm e numDois como query
    const { numUm, numDois } = req.query;

    const n1 = parseInt(numUm);
    const n2 = parseInt(numDois);
    let resultado;

    if (n1 == undefined || n2 == undefined || isNaN (n1) || isNaN (n2)) { //Aqui será feita a validação, se algum estiver indefinido ou não for número, vai dar erro e será enfiado ao cliente o erro 400
      return res.status(400).send("Os parâmetros não são válidos")
    }

    if (tipo === "soma") {

      resultado = n1 + n2;

    } else if (tipo === "subtracao") {

      resultado = n1 - n2;

    } else if (tipo === "multiplicacao") {

      resultado = n1 * n2;

    } else if (tipo === "divisao") {

      if (n2 === 0) {

        res.status(400).send("Não é possível fazer divisão por zero.");

      }
      resultado = n1 / n2;

    } else {

      res.status(400).send("Operação inválida.");
    }

    res.status(200).send(`Resultado do cáculo da ${tipo} é ${resultado}`); //Aqui irá mostrar o status 200, que é quando a requisição é feita com sucesso

  } catch (erro) {

    console.error(`Erro ao fazer a conta. ${erro}`) //Mostrará caso ocorrer erro no servidor
    res.status(500).send("Erro ao processar a requisição!")

  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

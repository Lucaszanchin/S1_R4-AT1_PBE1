const express = require("express");
const app = express();
const PORT = 3005;

app.get("/saudacao/:nome", (req, res) => {

  try {

    const {nome} = req.params;
    const {hora} = req.query;
    const horaNum = parseInt(hora);
    let saudacao;

    if (horaNum >= 0 && horaNum < 12) {

      saudacao = "Bom dia";

    } else if (horaNum >= 12 && horaNum < 18) {

      saudacao = "Boa tarde";

    } else if (horaNum >= 18 && horaNum <= 23) {

      saudacao = "Boa noite";

    } else {

      return res.send("Hora inválida. Coloque um valor entre 0 e 23, por favor.");

    }

    res.send(`${saudacao}, ${nome}!`);

  } catch (erro) {

    console.error(`Erro ao fazer o processamento: ${erro}`)
    res.status(500).send("Erro ao processar a requisição!")

  }

});


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
});

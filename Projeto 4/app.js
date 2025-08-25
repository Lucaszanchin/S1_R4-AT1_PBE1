const express = require("express");
const app = express();
const PORT = 3004;

app.get("/ano/:ano", (req, res) => {

  try {
    const {ano} = req.params;
    const anoNum = parseInt(ano);

    const bissexto = (anoNum % 4 === 0 && anoNum % 100 !== 0) || anoNum % 400 === 0;

    if (bissexto) {

      res.send(`O ano ${anoNum} é bissexto.`);

    } else {

      res.send(`O ano ${anoNum} não é bissexto.`);
    }

  } catch (erro) {

    console.error(`Erro ao fazer ao fazer o cálculo: ${erro}`)
    res.status(500).send("Erro ao processar a requisição!")

  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
});

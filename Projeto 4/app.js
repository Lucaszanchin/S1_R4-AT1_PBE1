const express = require("express"); //Importa o framework Express para criar o servidor HTTP
const app = express(); //Cria a aplicação Express, que será usada para definir rotas e configurar o servidor
const PORT = 3004; //Declara a porta do servidor

app.get("/ano/:ano", (req, res) => {

  try {
    const {ano} = req.params; //Desestrutura os parâmetros enviados na URL
    const anoNum = parseInt(ano);

    const bissexto = (anoNum % 4 === 0 && anoNum % 100 !== 0) || anoNum % 400 === 0;

    if (bissexto) {

      res.status(200).send(`O ano ${anoNum} é bissexto.`); //Aqui irá mostrar o status 200, que é quando a requisição é feita com sucesso

    } else {

      res.status(200).send(`O ano ${anoNum} não é bissexto.`); //Aqui irá mostrar o status 200, que é quando a requisição é feita com sucesso
    }

  } catch (erro) {

    console.error(`Erro ao fazer ao fazer o cálculo: ${erro}`) //Mostrará caso ocorrer erro no servidor
    res.status(500).send("Erro ao processar a requisição!") 

  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
});

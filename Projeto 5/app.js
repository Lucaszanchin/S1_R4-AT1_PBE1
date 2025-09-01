const express = require("express"); //Importa o framework Express para criar o servidor HTTP
const app = express(); //Cria a aplicação Express, que será usada para definir rotas e configurar o servidor
const PORT = 3005; //Declara a porta do servidor

app.get("/saudacao/:nome", (req, res) => {

  try {

    const {nome} = req.params; //Desestrutura os parâmetros enviados na URL e definará nome como params e hora como query
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

      return res.status(400).send("Hora inválida. Coloque um valor entre 0 e 23, por favor.");

    }

    res.status(200).send(`${saudacao}, ${nome}!`); //Aqui irá mostrar o status 200, que é quando a requisição é feita com sucesso

  } catch (erro) {

    console.error(`Erro ao fazer o processamento: ${erro}`) //Mostrará caso ocorrer erro no servidor
    res.status(500).send("Erro ao processar a requisição!")

  }

});


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
});

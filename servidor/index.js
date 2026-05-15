import express from 'express';

const servidor = express();

servidor.use(express.json())

const registro = [] // """banco de dados""" 

servidor.post('/registros', (req,res) => {
  const dados = req.body // pega o corpo da requisição

  if (!dados.nome) {
    res.status(400).json({
      mensagem: 'campo nome é obrigatório!'
    })
  }

  console.log(`Dados da requsição!
     o que tem no corpo que o frontend me mandou:
    ${dados}`)
    registro.push(dados) // simulação de guardar dados no banco
  
    res.status(201).json({
      mensagem: 'Dados recebidos com sucesso'
    })
});









servidor.get('/registro', (req, res) => {
  res.status(200).json(registro);
});
servidor.listen(3000, () => {
  console.log("Servidor rodando http://localhost:3000");
});
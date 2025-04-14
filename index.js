const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// ---------------- PRODUTOS ----------------

let produtos = [
  { id: 1, nome: "Teclado", preco: 100 },
  { id: 2, nome: "Mouse", preco: 50 }
];

// PATCH /produtos/:id
app.patch('/produtos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const produto = produtos.find(p => p.id === id);

  if (!produto) {
    return res.status(404).json({ mensagem: "Produto não encontrado." });
  }

  const { nome, preco } = req.body;

  if (nome !== undefined) produto.nome = nome;
  if (preco !== undefined) produto.preco = preco;

  res.json(produto);
});

// ---------------- TAREFAS ----------------

let tarefas = [];
let proximoId = 1;

// GET /tarefas
app.get('/tarefas', (req, res) => {
  res.json(tarefas);
});

// GET /tarefas/:id
app.get('/tarefas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const tarefa = tarefas.find(t => t.id === id);

  if (!tarefa) {
    return res.status(404).json({ mensagem: "Tarefa não encontrada." });
  }

  res.json(tarefa);
});

// POST /tarefas
app.post('/tarefas', (req, res) => {
  const { descricao, concluida, prazo } = req.body;

  if (!descricao || concluida === undefined || !prazo) {
    return res.status(400).json({ mensagem: "Todos os campos são obrigatórios." });
  }

  const novaTarefa = {
    id: proximoId++,
    descricao,
    concluida,
    prazo
  };

  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
});

// PUT /tarefas/:id
app.put('/tarefas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const tarefa = tarefas.find(t => t.id === id);

  if (!tarefa) {
    return res.status(404).json({ mensagem: "Tarefa não encontrada." });
  }

  const { descricao, concluida, prazo } = req.body;

  if (!descricao || concluida === undefined || !prazo) {
    return res.status(400).json({ mensagem: "Todos os campos são obrigatórios." });
  }

  tarefa.descricao = descricao;
  tarefa.concluida = concluida;
  tarefa.prazo = prazo;

  res.json(tarefa);
});

// PATCH /tarefas/:id
app.patch('/tarefas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const tarefa = tarefas.find(t => t.id === id);

  if (!tarefa) {
    return res.status(404).json({ mensagem: "Tarefa não encontrada." });
  }

  const { descricao, concluida, prazo } = req.body;

  if (descricao !== undefined) tarefa.descricao = descricao;
  if (concluida !== undefined) tarefa.concluida = concluida;
  if (prazo !== undefined) tarefa.prazo = prazo;

  res.json(tarefa);
});

// DELETE /tarefas/:id
app.delete('/tarefas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = tarefas.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ mensagem: "Tarefa não encontrada." });
  }

  tarefas.splice(index, 1);
  res.status(204).send();
});

app.get('/', (req, res) => {
  res.send('API de Produtos e Tarefas funcionando! 🚀');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

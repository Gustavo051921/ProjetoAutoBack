const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

// Criando o servidor Express
const app = express();
const port = 5800;

// Conectando ao banco de dados MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Altere conforme necessário
  database: 'db_atvpi'
});

// Teste de conexão com o banco de dados
db.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao banco de dados MySQL!');
});

// Middleware para analisar o corpo das requisições
app.use(bodyParser.json());

// Endpoint para listar produtos
app.get('/produtos', (req, res) => {
  const query = 'SELECT * FROM tb_produto'; // Verifique o nome correto da tabela
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Endpoint para criar pedido
app.post('/pedido', (req, res) => {
  const { usuario_id, itens } = req.body;

  // Criar um pedido
  const pedidoQuery = 'INSERT INTO tb_compra_direta (Com_ID, Com_Status) VALUES (?, ?)';
  db.query(pedidoQuery, [usuario_id, 'Pendente'], (err, result) => {
    if (err) throw err;

    const pedido_id = result.insertId; // Obter o ID do pedido criado

    // Inserir os itens do pedido
    const itemQuery = 'INSERT INTO tb_compra_direta (Com_ID, Pro_ID, Com_Quantidade, Com_Preco) VALUES (?, ?, ?, ?)';
    itens.forEach(item => {
      db.query(itemQuery, [pedido_id, item.produto_id, item.quantidade, item.preco], (err) => {
        if (err) throw err;
      });
    });

    res.status(201).json({ message: 'Pedido criado com sucesso!', pedido_id });
  });
});

// Endpoint para listar pedidos de um usuário
app.get('/pedidos/:usuario_id', (req, res) => {
  const { usuario_id } = req.params;
  const query = 'SELECT * FROM tb_compra_direta WHERE Com_ID = ?'; // Verifique se o campo é o correto para o usuário
  db.query(query, [usuario_id], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`API de compras rodando em http://localhost:${port}`);
});

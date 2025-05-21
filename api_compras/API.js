// app.js
const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./config');  // Importando o pool de conexão com o banco de dados

const app = express();
const port = 5500;

// Configurar body-parser para receber dados JSON no corpo das requisições
app.use(bodyParser.json());

// Rota para listar todos os clientes (Read)
app.get('/clientes', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM tb_cliente');
        res.json(rows);
    } catch (error) {
        console.error('Erro ao consultar clientes:', error);
        res.status(500).send('Erro ao consultar clientes.');
    }
});

// Rota para criar um novo cliente (Create)
app.post('/clientes', async (req, res) => {
    const { Cli_Nome, Cli_Senha, End_ID, Ema_ID, Tel_ID, Ins_CNPJ } = req.body;
    
    try {
        const [result] = await pool.query(
            'INSERT INTO tb_cliente (Cli_Nome, Cli_Senha, End_ID, Ema_ID, Tel_ID, Ins_CNPJ) VALUES (?, ?, ?, ?, ?, ?)', 
            [Cli_Nome, Cli_Senha, End_ID, Ema_ID, Tel_ID, Ins_CNPJ]
        );
        res.status(201).json({ id: result.insertId });
    } catch (error) {
        console.error('Erro ao criar cliente:', error);
        res.status(500).send('Erro ao criar cliente.');
    }
});

// Rota para atualizar um cliente (Update)
app.put('/clientes/:id', async (req, res) => {
    const { id } = req.params;
    const { Cli_Nome, Cli_Senha, End_ID, Ema_ID, Tel_ID, Ins_CNPJ } = req.body;

    try {
        await pool.query(
            'UPDATE tb_cliente SET Cli_Nome = ?, Cli_Senha = ?, End_ID = ?, Ema_ID = ?, Tel_ID = ?, Ins_CNPJ = ? WHERE Cli_ID = ?',
            [Cli_Nome, Cli_Senha, End_ID, Ema_ID, Tel_ID, Ins_CNPJ, id]
        );
        res.send('Cliente atualizado com sucesso!');
    } catch (error) {
        console.error('Erro ao atualizar cliente:', error);
        res.status(500).send('Erro ao atualizar cliente.');
    }
});

// Rota para excluir um cliente (Delete)
app.delete('/clientes/:id', async (req, res) => {
    const { id } = req.params;
    
    try {
        await pool.query('DELETE FROM tb_cliente WHERE Cli_ID = ?', [id]);
        res.send('Cliente excluído com sucesso!');
    } catch (error) {
        console.error('Erro ao excluir cliente:', error);
        res.status(500).send('Erro ao excluir cliente.');
    }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`API de compras rodando em http://localhost:${port}`);
});

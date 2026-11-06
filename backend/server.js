const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());

const dataFilePath = path.join(__dirname, 'transactions.json');

// Rota para listar todas as transações
app.get('/api/transactions', (req, res) => {
    try {
        const fileData = fs.readFileSync(dataFilePath, 'utf8');
        const transactions = JSON.parse(fileData);
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao ler os dados financeiros.' });
    }
});

// Rota de teste inicial
app.get('/api/health', (req, res) => {
    res.json({ status: 'API rodando com sucesso! 🚀' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

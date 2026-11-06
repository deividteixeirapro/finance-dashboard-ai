const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Rota de teste inicial
app.get('/api/health', (req, res) => {
    res.json({ status: 'API rodando com sucesso! 🚀' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});Criando estrutura inicial do backend

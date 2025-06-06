const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Estoque de acessórios
let acessorios = [];

// Criar novo acessório
app.post('/acessorios', (req, res) => {
    const acessorio = req.body;

    if (acessorios.some(a => a.id === acessorio.id)) {
        return res.status(400).json({ error: 'ID do acessório já existe!' });
    }

    acessorios.push(acessorio);
    res.status(201).json(acessorio);
});

// Listar todos os acessórios
app.get('/acessorios', (req, res) => {
    res.json(acessorios);
});

// Buscar acessório por ID
app.get('/acessorios/:id', (req, res) => {
    const acessorio = acessorios.find(a => a.id === req.params.id);

    if (acessorio) {
        res.json(acessorio);
    } else {
        res.status(404).json({ error: 'Acessório não encontrado' });
    }
});

// Atualizar acessório
app.put('/acessorios/:id', (req, res) => {
    const id = req.params.id;
    const index = acessorios.findIndex(a => a.id === id);

    if (index !== -1) {
        acessorios[index] = req.body;
        res.json(acessorios[index]);
    } else {
        res.status(404).json({ error: 'Acessório não encontrado' });
    }
});

// Deletar acessório
app.delete('/acessorios/:id', (req, res) => {
    const id = req.params.id;
    const index = acessorios.findIndex(a => a.id === id);

    if (index !== -1) {
        const removido = acessorios.splice(index, 1);
        res.json(removido[0]);
    } else {
        res.status(404).json({ error: 'Acessório não encontrado' });
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor de acessórios rodando em http://localhost:${PORT}`);
});

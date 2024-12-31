const express = require('express');
const app = express();
const port = 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Rota básica para teste
app.get('/', (req, res) => {
  res.send('Servidor funcionando!');
});

// Inicializa o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});


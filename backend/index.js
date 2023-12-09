const express = require('express');
const cors = require('cors');

// controle de rotas
const pacientes = require('./routes/rotasPacientes');
const vacinas = require('./routes/rotasVacinas');

const app = express();
const PORT = 3007;

app.use(cors());
app.use(express.json());

app.use('/pacientes', pacientes); /* products from database */
app.use('/vacinas', vacinas); /* products from database */

// configuramos a porta do servidor
app.listen(PORT, () => {
    console.log(`app rodando na porta ${PORT}`);
})

app.get('/pacientes', (req, res) => {
    res.send('Funcionando');
})

app.get('/vacinas', (req, res) => {
    res.send('Funcionando vacinas');
})


const express = require('express');
const router = express.Router();
const uuidv4 = require('uuid')

const { pool } = require('../backend/databaseConnnection/db.config');

router.get('/listadoDePacientes', async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM PACIENTE;');
    res.send(
        {
            message: 'Listagem de pacientes',
            data: rows
        }
    );
})

router.post('/criandoPaciente', async (req, res) => {
    const paciente = req.body;

    const { rows } = await pool.query('INSERT INTO products (id , name, category, price) VALUES ( $1, $2, $3) RETURNING *;',
        [
            uuidv4(),
            paciente.nome,
            paciente.dataNascimento
        ]
    );
    res.send(
        {
            message: 'Listagem de pacientes',
            data: rows
        }
    );
})

module.exports = router;
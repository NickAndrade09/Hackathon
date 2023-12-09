'use strict';

const express = require('express');
const router = express.Router();

const { pool } = require('../backend/databaseConnnection/db.config')

router.get('/contadordevacinas', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT count(*) FROM VACINA')
        res.send(rows);

    } catch (error) {
        console.error(error);
        res.status(500).send("Erro no servidor");
    }
})

module.exports = router;
const { Pool } = require('pg')

const pool = new Pool(
    {
        user: 'dorothy',
        host: 'itcpostgresql.postgres.database.azure.com',
        database: 'db013',
        password: '%&unsas_aew27013',
        port: 5432,
        ssl: true
    }
)

/* const showVacinasCount = async () => {
    const res = await pool.query('SELECT count(*) FROM VACINA');
    console.log(res.rows);
} */

module.exports = { pool };

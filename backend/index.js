'use strict'

// importamos o express para inicializar uma aplicaçao web 
const express = require('express');
const cors = require('cors');

// controle de rotas
/* const database = require('./routes/router'); */

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

/* app.use('/products', productsRouter); prodcts from array or locally */
/* app.use('/db', database); */ /* products from database  */

const products = [
    { id: 1, name: 'Product A', category: 'eletrônicos', price: '$20' }, { id: 2, name: 'Product B', category: 'moveis', price: '$35' }, { id: 3, name: 'Product C', category: 'limpeza', price: '$18' }
]

// configuramos a porta do servidor
app.listen(PORT, () => {
    console.log(`app rodando na porta ${PORT}`);
})

app.get('/', (req, res) => {
    res.json(products);
})
const express = require('express');
const cors = require('cors');

const adminController = require('./controllers/Admin.controller')
const produtoController = require('./controllers/Produto.controller')
const clienteController = require('./controllers/Cliente.controller')
const vendedorController = require('./controllers/Vendedor.controller')

const routes = express.Router();

routes.use(cors());

routes.get('/Clientes', clienteController.index);
routes.post('/Clientes', clienteController.create);
routes.put('/Clientes', clienteController.update);
routes.delete('/Clientes', clienteController.delete);

routes.get('/Produto', produtoController.index);
routes.put('/Produto', produtoController.create);
routes.post('/Produto', produtoController.update);
routes.delete('/Produto/:id', produtoController.delete);

routes.get('/Vendedor', vendedorController.index);
routes.put('/Vendedor', vendedorController.create);
routes.post('/Vendedor', vendedorController.update);
routes.delete('/Vendedor', vendedorController.delete);


module.exports = routes;

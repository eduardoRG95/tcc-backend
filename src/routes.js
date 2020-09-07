const express = require('express');

const adminController = require('./controllers/admin.controller')
const produtoController = require('./controllers/Produto.controller')
const vendedorController = require('./controllers/Vendedor.controller')

const routes = express.Router();

routes.get('/admin', adminController.index);
routes.post('/admin', adminController.create);

routes.get('/produto', produtoController.index);
routes.post('/produto', produtoController.create);

routes.get('/vendedores', vendedorController.index);
routes.post('/vendedores', vendedorController.create);


module.exports = routes;

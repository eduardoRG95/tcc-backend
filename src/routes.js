const express = require('express');
const cors = require('cors');

const adminController = require('./controllers/Admin.controller')
const produtoController = require('./controllers/Produto.controller')
const usuarioController = require('./controllers/Usuario.controller')
const vendedorController = require('./controllers/Vendedor.controller')

const routes = express.Router();

routes.use(cors());

routes.get('/Usuario', usuarioController.index);
routes.put('/Usuario', usuarioController.create);
routes.post('/Usuario', usuarioController.update);
routes.delete('/Usuario/:id', usuarioController.delete);

routes.get('/Produto', produtoController.index);
routes.put('/Produto', produtoController.create);
routes.post('/Produto', produtoController.update);
routes.delete('/Produto/:id', produtoController.delete);

routes.get('/Vendedor', vendedorController.index);
routes.put('/Vendedor', vendedorController.create);
routes.post('/Vendedor', vendedorController.update);
routes.delete('/Vendedor/:id', vendedorController.delete);


module.exports = routes;

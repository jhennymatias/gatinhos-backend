const express = require('express');
const AnimalController = require("./controllers/animalController");
const Animal_produtoController = require('./controllers/animal_produtoController');
const ComposicaoController = require('./controllers/composicaoController');
const ProdutoController = require('./controllers/produtoController');
const Produto_composicaoController = require('./controllers/produto_composicaoController');
const SessionController = require('./controllers/sessionController');
const UserController = require('./controllers/userController');
const routes = express.Router();

// Animal Routes 
routes.post('/animal', AnimalController.create);
routes.put('/animal', AnimalController.update);
routes.get('/animal', AnimalController.index);
routes.delete('/animal/:id', AnimalController.dele);

// User Routes
routes.post('/user', UserController.create);
routes.put('/user', UserController.updatePassword);
routes.get('/user', UserController.index);

//produtos routes
routes.post('/produto', ProdutoController.create);
routes.put('/produto', ProdutoController.update);
routes.get('/produto', ProdutoController.index);

//composicao routes
routes.post('/composicao', ComposicaoController.create);
routes.put('/composicao', ComposicaoController.update);
routes.get('/composicao', ComposicaoController.index);

//composicao produtos routes
routes.post('/produtocomposicao', Produto_composicaoController.create);
routes.delete('/produtocomposicao/:idProduto/:idComposicao', Produto_composicaoController.dele);
routes.get('/produtocomposicao', Produto_composicaoController.index);

//animal produtos routes
routes.post('/animalproduto', Animal_produtoController.create);
routes.delete('/animalproduto/:idAnimal/:idProduto', Animal_produtoController.dele);
routes.get('/animalproduto', Animal_produtoController.index);

//session routes
routes.post('/loginuser', SessionController.create);


module.exports = routes;
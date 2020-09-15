import express from 'express';
import UsersController from './controllers/UsersController';
import KeysController from './controllers/KeysController';

const usersController = new UsersController();
const keysController = new KeysController();

const routes = express.Router();

// Users
routes.get('/users', usersController.index);
routes.post('/users', usersController.create);

// Users
routes.get('/keys', keysController.index);
routes.post('/keys', keysController.create);

export default routes;
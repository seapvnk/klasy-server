import express from 'express';
import UsersController from './controllers/UsersController';

const usersController = new UsersController();

const routes = express.Router();

routes.get('/users', usersController.index);

export default routes;
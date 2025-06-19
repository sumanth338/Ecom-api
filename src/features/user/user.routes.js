// Manage routes/paths to ProductController

// 1. Import express
import express from 'express';
import UserController from './user.controller.js';

// 2. Intialize Express Router
const UserRouter = express.Router();

// 3. Create a new instance of ProductController
const userController = new UserController();

// 4. Define routes

UserRouter.post('/signup', userController.signup);
UserRouter.post('/signin', userController.signin);



export default UserRouter;
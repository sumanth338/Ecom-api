// Manage routes/paths to ProductController

// 1. Import express
import express from 'express';
import ProductController from './product.controller.js';

// 2. Intialize Express Router
const router = express.Router();

// 3. Create a new instance of ProductController
const productController = new ProductController();

// 4. Define routes
// localhost:3000/api/products
router.get('/', productController.getAllProducts);
router.post('/', productController.addProduct);


export default router;
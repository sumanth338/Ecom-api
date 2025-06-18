// Manage routes/paths to ProductController

// 1. Import express
import express from 'express';
import ProductController from './product.controller.js';
import {upload } from '../../middleware/fileupload.middleware.js';

// 2. Intialize Express Router
const router = express.Router();

// 3. Create a new instance of ProductController
const productController = new ProductController();

// 4. Define routes
// localhost:3000/api/products
router.get('/', productController.getAllProducts);
router.post('/', upload.single('imageUrl'), productController.addProduct);
router.get('/:id', productController.getOneProduct)

router.get('/filter', productController.filterProducts);


export default router;
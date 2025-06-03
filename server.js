import express from 'express';
import * as productsRoutes from './src/features/product/products.routes.js';

const server = express();

server.get('/', (req, res)=>{
    res.send('Welcome to the Ecommerce API')
})

server.use('/api/products', productsRoutes);
server.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
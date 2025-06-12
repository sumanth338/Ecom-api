import express from 'express';
import router from './src/features/product/products.routes.js';
import bodyParser from 'body-parser';

const server = express();

server.use(bodyParser.json());

server.get('/', (req, res)=>{
    res.send('Welcome to the Ecommerce API')
})

server.use('/api/products', router);
server.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
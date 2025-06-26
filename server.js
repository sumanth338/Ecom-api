import express from 'express';
import router from './src/features/product/products.routes.js';
import bodyParser from 'body-parser';
import UserRouter from './src/features/user/user.routes.js';
import basicAuthorization from './src/middleware/basicAuth.middleware.js';

const server = express();

server.use(express.json());

server.use(bodyParser.json());

server.get('/', (req, res)=>{
    res.send('Welcome to the Ecommerce API')
})

server.use('/api/products', basicAuthorization,router);
server.use('/api/users', UserRouter)
server.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
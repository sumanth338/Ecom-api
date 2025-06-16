import Product from './product.model.js';

export default class ProductController {
    getAllProducts(req, res) {
        const products = Product.getAll()
        res.status(200).send(products)
    }
    addProduct(req, res) {
      const {name, price, sizes} = req.body
      const newProduct = {
        name, 
        price:parseFloat(price),
        sizes:sizes.split(','),
        imageUrl:req.file.filename
      }
      const createRecord =Product.add(newProduct);
      res.status(200).send(createRecord);
    }
    rateProduct(req, res) {

    }
    getOneProduct(req, res) {
        const id = req.params.id;
        const product = Product.get(id);
        if(!product){
          return res.status(404).send('product not found')
        }
        else{
          res.status(200).send(product);
        }
    }
}
export default class Product {
    constructor(id, name, desc, imageURL, category, price, sizes){
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.imageURL = imageURL;
        this.category = category
        this.price = price;
        this.sizes = sizes;
    }

    static get(id){
      const product = products.find(i => i.id == id);
      return product;
    }

    static getAll(){
        return products;
    }
    static add(product){
      product.id  = products.length + 1;
      products.push(product);
      return product;
    }
}

var products = [
    new Product(
      1,
      'Product 1',
      'Description for Product 1',
      19.99,
      'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
      'Cateogory1'
    ),
    new Product(
      2,
      'Product 2',
      'Description for Product 2',
      29.99,
      'https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg',
      'Cateogory2',
      ['M', 'XL']
    ),
    new Product(
      3,
      'Product 3',
      'Description for Product 3',
      39.99,
      'https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg',
      'Cateogory3',
      ['M', 'XL','S']
    )];
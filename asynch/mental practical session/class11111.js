class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
    applyDiscount(discount){

    let discountedPrice = this.price - (this.price * (discount / 100)); 
        return  `DiscountedPrice: ${discountedPrice}`;
      }
  
    getDetails() {
      return `Product:${this.name}, Price: ${this.price}`;
    }
  }
 
  const product1 = new Product("shirt", 19.9);
  console.log(product1.getDetails()); 
  console.log(product1.applyDiscount(50)); 
  

  
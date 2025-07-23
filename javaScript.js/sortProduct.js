function sortProduct(product){
    return product.sort((a,b) => a.price - b.price);
}
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 75 },
  { name: "Monitor", price: 300 }
];

console.log(sortProduct(products));
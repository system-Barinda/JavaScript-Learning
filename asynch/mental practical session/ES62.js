// const productId = [1,1,2,3,4,5,6,6,7,7];
// let removeDiplicate = new Set(productId);
// console.log(removeDiplicate);

function getUniqueProducts(products) {
    let productMap = new Map();
  
    products.forEach(product => {
      productMap.set(product.id, product); 
    });
  
    return [...productMap.values()]; 
  }
  
 
  const products = [
    { id: 101, name: "Laptop" },
    { id: 202, name: "Phone" },
    { id: 101, name: "Laptop" }, 
    { id: 303, name: "Tablet" }
  ];
  
  console.log(getUniqueProducts(products));
  
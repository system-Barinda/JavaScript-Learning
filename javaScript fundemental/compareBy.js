let products = [
  { name: 'ziPhone', price: 900 },
  { name: 'ASamsung Galaxy', price: 850 },
  { name: 'Sony Xperia', price: 700 },
];

function compareBy(propertyName) {
  return function(a, b) {
    if (a[propertyName] > b[propertyName]) {
      return 1;
    } else if (a[propertyName] < b[propertyName]) {
      return -1;
    } else {
      return 0;
    }
  };
}

console.table(products);


let result = products.sort(compareBy('name'));

console.table(result);

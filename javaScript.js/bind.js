// function getArea(w,h){
//     return w * h;
// };
// let createD = getArea.bind(null,10);
// console.log(createD(5));


// let barinda = [34, 12, 57, 28, 91];

// let createNu = Math.apply(null,barinda);
// console.log(createNu);

// function capitalizeFirstLetter() {
//  return this.charAt(0).toUpperCase() + this.slice(1);
// }
// let bar = capitalizeFirstLetter.call('barinda');
// console.log(bar)

function toArray() {
  return Array.prototype.slice.apply(this);
}

const arrayLikeObject = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
};

const realArray = toArray.apply(arrayLikeObject);

console.log(realArray); // 👉 Output: ['a', 'b', 'c']


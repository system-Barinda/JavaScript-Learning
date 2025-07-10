// let checkSmall = (current) => current != 0;
// let barinda = [1,2,3,4,5,6,7];

// console.log(checkSmall(barinda));
let barinda = [1,2,3,4,5,6,7]
function isBigEnough(element, index, array) {
  console.log(`Checking index ${index}: ${element}`);
  return element >= 10;
}
isBigEnough(barinda)
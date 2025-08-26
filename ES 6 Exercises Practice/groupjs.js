let barinda = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20];

let result = Object.groupBy(barinda,num => (num % 2 === 0 ? 'even':'olde'))

console.log(result)
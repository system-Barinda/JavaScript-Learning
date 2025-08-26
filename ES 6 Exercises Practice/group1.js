// let barinda = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// let system = Object.groupBy(barinda,arr => (arr % 2  == 0 ?'even':'older' ));
// console.log(system);

let barinda = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let result = Object.groupBy(barinda,arr => {
    return arr % 2 === 0?'even':'older'
})
console.log(result)
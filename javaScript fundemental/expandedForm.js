// function expandedform(num){
//     return num
//            .toString()
//            .split('')
//            .map((digit,index,arr) => digit * Math.pow(10, arr.length - index - 1))
//            .filter(n => n !== 0)
//            .join(' + ');   
// }
// console.log(expandedform('15050'));

let expandedform = n => n.toString()
                          .split('')
                          .reverse()
                          .map((a,i) => a * Math.pow(10,i))
                          .filter(a => a > 0)
                          .reverse()
                          .join(' + ');
console.log(expandedform('15050'));                          
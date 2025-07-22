// function twoSum(numbers,target){
//     let map = new Map();
//     for( let i = 0; i < numbers.length; i++){
//         let compenent = target - numbers[i];
//         if(map.has(compenent)){
//             return [map.get(compenent),i];
//         }
//         map.set(numbers[i],i);
//     }
// }
// console.log(twoSum([1,2,3],4));

function twoSum(num,targ){
    for(let i = 0; i < num.length - 1; i++){
        for(let j = i + 1; j < num.length; j++){
               if(num[i] + num[j] === targ)return [i,j];
        }
    }
}
console.log(twoSum([1,2,3],4));
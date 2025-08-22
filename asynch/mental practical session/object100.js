// function arrayDelete(num)
// {
//     let data = ['barinda','system','sylvere','gambira','docite','kelebu'];

//     return data.filter((element) => {
//         return element !== num;
//     });
// }
// console.log(arrayDelete('system'));

let arr = [1,2,3,4,5,6,7,8,9,10];
for(let i = 1; i < arr.length; i += 2){
    arr[i] += 2;
}
console.log(arr);

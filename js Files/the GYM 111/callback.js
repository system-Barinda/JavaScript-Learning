let barinda = (num1,num2) => {
   return new Promise((resolve, reject) => {
         if(typeof num1 === 'number' && typeof num2 === 'number')
         {
            let result = resolve( num1 + num2);
            return result;
         }
         else 
         {
            reject(" the operation of sum are fails");
         }
   });
};
barinda(8,92)
.then(result => {
    console.log("the sum of two number is:" + result);
})
.catch(error => {
   console.log(" the operation are fails" + error);
});
// async function barinda(num1,num2) {
//     try{
//         const result = await barinda( num1, num2);
//         console.log('the sum are is :',result);
//     }
//     catch (error) {
//         console.log('error are :', error);
//     }
// }


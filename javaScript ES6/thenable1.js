const addNumber = (num1,num2) => {
   
    return {
        then:function(resolve,reject){
            setTimeout(() => {
            if( typeof num1 === 'number' && typeof num2 === 'number'){
                let result = num1 + num2;
                      resolve(result);
               
                
            }
            else{
                
               reject(new Error('please enter the valid number'));      
                
            }
             },3000);
        },
    };
};

Promise.resolve(addNumber(100,200))
.then((result) => {
    console.log('the ressult :', result);
})
.catch((error) => {
    console.error('error:', error);
});

// async function test(){
//     let result = await addNumber(200,500);
//     console.log(` the result is: ${result}`);
// };
// console.log('please wait!!!......');
// test()

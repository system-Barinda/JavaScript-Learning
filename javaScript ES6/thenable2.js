const barinda = (a,b) => {
   return {
      then:function(onFullFilled,onRejected){
         const system = new Promise((resolve,rejected) => {
            setTimeout(() => {
               if( typeof a === 'number' && typeof b === 'number'){
                const sum = a + b
                resolve(sum)
               }
               else
               {
                rejected(new Error(' please enter valid number'));
               }
            },2000);
         });
         return system.then(onFullFilled,onRejected)
      }
   }
}

async function test(){
    try{
      const result = await barinda(200,'300');
       console.log(`the result : ${result}`);
    } catch(err){
      console.error("error:",err.message)
    }
    
}
console.log('please wait 2s!!!!.....');
test()
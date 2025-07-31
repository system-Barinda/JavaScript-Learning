const barinda = {
    then:function(resolve,reject){
        setTimeout(() => {
            resolve('All is I did longtime ago!!!!');
        },3000);
    }
};
// Promise.resolve(barinda).then(console.log);

async function test(){
    const result =  await barinda;
    console.log(result);
}
console.log('wait 3s !!!!!');
test()
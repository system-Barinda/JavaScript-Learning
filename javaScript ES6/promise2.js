let promiseA = new Promise((resolve,reject) => {
    resolve('my name is barinda system sylvere');
    reject('hello you the one I hate everydays');
});
promiseA.then((result) => {
    console.log(`hello I would wish you to have new freind like : ${result}`);
})
.catch((error) => {
    console.error(`I hate you with all I have ${error}`);
})
console.log('imadiatiry logging!');
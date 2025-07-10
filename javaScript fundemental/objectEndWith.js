// let words = " my name is barinda system is the develper in moble web app";
// console.log(words.endsWith("web app"));

// const arr = ['apple','banana','grape'];
// let lastElement = arr[arr.length - 1];

let obj = {
    firstName :"alce",
    lastName:"system barinda",
};

let barinda = toString(obj);
console.log(typeof(barinda));
for( let key in barinda){
    if( key.endsWith('system barinda')){
        console.log(`${key} ends with 'names'`);
    }
}

// const name = 'i have born july 10 2025';
// let hey = name.split(" ");
// console.log(hey);


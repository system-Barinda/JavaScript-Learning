// let barinda = {};
// Object.defineProperty(barinda,"x",{value:20,writable:false});
// barinda.x = 50;
// console.log(barinda.x);

function barinda(){
    console.log(this);
}
barinda();
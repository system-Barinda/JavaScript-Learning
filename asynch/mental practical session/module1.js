// import { greet } from './module.js';
// import myObject from './module.js';
// greet('Alice');  
// console.log(myObject);  
// const barinda = {
//     name:'barinda'
// };
// barinda.name = 'system';
// console.log(barinda);
class barinda 
{
    constructor(name)
    {
        this.item = [];
    }
    push(element)
    {
        this.item.push(element);
    }
}
const barinda1 = new barinda();
barinda1.push("barinda");
barinda1.push("system");
barinda1.push("sylvere");
console.log(barinda1);

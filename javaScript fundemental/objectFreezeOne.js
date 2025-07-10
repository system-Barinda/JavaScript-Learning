let tumba = {
    name :"barinda",
    age : 40,
    location:"muhanga",
    price:4000,
};
Object.defineProperty(tumba, "location",{
    writable:true,
    configurable:true,
    enumerable:true,
});
tumba.location = "huye";
console.table(tumba);
delete tumba.location;
console.table(tumba);

tumba.name = undefined;
tumba.name = "samuel";
console.table(tumba);

// console.log(Object.getOwnPropertyDescriptor(tumba,"location"));
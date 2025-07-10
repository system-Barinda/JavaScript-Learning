let person = {
    name:"barinda",
};
Object.preventExtensions(person);
console.log(Object.isExtensible(person));
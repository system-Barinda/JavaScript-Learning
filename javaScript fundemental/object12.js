let object1 = {};
Object.defineProperty(object1,"proper1",{
value:43,
writable:false,
});
object1.proper1 = 90;
console.log(object1.proper1);
    

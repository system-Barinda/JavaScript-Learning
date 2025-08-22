const barinda = {
    name:"barinda system sylvere",
    location:"muhanga",
    addres:"TUMBA college",
};
const system  = new Proxy(barinda,{
    get(target,prop){
        return target[prop];
    },
    set(target,prop,value){
         if(value.length > 10){
            return target[prop] = value;
         }
         else{
                 console.log('please value must above the 10 character');
             }
    }
});
console.log(system)
system.location = 'kigali9849379jkdjfljalfjadf';
system.name = 'kigili barinda system';
console.log(system)

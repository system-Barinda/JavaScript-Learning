const person  = {
    name:"barinda system sylvere",
    location:"muhanga",
    address:"south provence",
    universerty:"tumba college",
}

const system = new Proxy(person,{
       deleteIndf(targed,prop){
        if(targed[prop] === 'name'){
            return false
            return targed[prop]
        }
        delete targed[prop];
       }

});
delete system.name
console.log(system)
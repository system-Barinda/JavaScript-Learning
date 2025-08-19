const persons = {
    name:"barinda system sylvere",
    age:10,
    location:"Muhanga",
    compasi:"tumba college",
}
let barinda = new Map(Object.entries(persons));
barinda.set("users","Adimn")
if(barinda.has("age")){
    barinda.delete("age");
}
console.table(barinda)
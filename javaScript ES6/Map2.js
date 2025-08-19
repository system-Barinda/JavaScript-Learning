let persons = {
    name:"barinda system sylvere",
    age:23,
    location:"Muhanga",
    univeresity:"tumba college"
}
const storage = new Map();
storage.set("name",persons.name);
storage.set("age",persons.age);
storage.set("location",persons.location);
storage.set("univeresity", persons.univeresity);
console.log(storage.values())
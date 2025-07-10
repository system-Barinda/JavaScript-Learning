let users = {
    name:"barinda system sylvere",
    age:40,
    location:"muhanga",
    school:"tumba colleges",
}
// console.table(users);
Object.freeze(users);
// users.name = "iradukunda sandrine";
// console.table(users);
console.log(Object.isFrozen(users));

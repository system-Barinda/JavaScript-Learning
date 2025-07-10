let users = {
    name:'barinda',
    age:30,
    location:"muhanga",
}
users.parents = "mukristu";
Object.seal(users);
users.name = "male";

console.table(Object.isSealed(users));
console.table(users);
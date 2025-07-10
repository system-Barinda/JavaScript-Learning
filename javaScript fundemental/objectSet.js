// const obj = {
//     items:new Set([1,2,3]),
// };
// // console.table(obj.items.has(7));;

// let tags = {};
// tags["fruits"] = new Set(["apple","orange","banana"]);
// console.log(tags.fruits);

let users = {
    names:"barinda",
    age:23,
    skills:new Set(),
}
users.skills.add("software ingineering");
users.skills.add("javascript");
users.skills.add("software ingineering");
console.log(users);
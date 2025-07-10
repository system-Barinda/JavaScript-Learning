function friend(friends){
   return friends.map((word) => word.length == 4 ? word:"").filter(e => e.length > 0)
}
let Input = ["Ryan", "Kieran", "Jason", "Yous"]
console.log(friend(Input));
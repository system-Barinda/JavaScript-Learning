var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];
function print(str){
    return str.forEach((a) => {
        console.log(`${a.type} donuts  cost ${a.cost} each`);
    });
}
print(donuts);

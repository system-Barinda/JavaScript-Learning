let barinda = {
    item : new WeakSet(),
};
let item = {
    names:"iradukunda",
}
barinda.item.add(item);
barinda.item.delete(item);
console.log(barinda.item.has(item));
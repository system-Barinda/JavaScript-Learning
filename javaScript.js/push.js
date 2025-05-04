class person 
{
    constructor()
    {
        this.item = [];
    }
    push(item)
    {
        this.item.push(item);
    }
    pop(item)
    {
        this.item.pop(item);
    }
}
const barinda = new person();
barinda.push("petfree");
barinda.push("oscar");
barinda.pop("kimenyi");
console.log(barinda);
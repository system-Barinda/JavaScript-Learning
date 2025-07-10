class Money{
    constructor(amount){
        this.amount = amount;

    }
    valueOf(){
        return this.amount;
    }
    toString(){
        return `$${this.amount} are good kbx`;
    }
}

const price = new Money(100);
const wallet = new Money(2000);
const total = price + wallet;
const totalMoney = new Money(total)
console.log(totalMoney.toString());
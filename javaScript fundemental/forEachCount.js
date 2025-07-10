let arr = [1,2,3,4,5,6,7,8,9,10];
class Counter{
    constructor(){
        this.sum = 0;
        this.count = 0;
    }
    add(barinda){
        barinda.forEach(function countingEntry(entry){
            this.sum += entry;
            ++this.count;
        }, this);
    }
}
let obj = new Counter();
obj.add(arr);
console.log("this the number of element do we have :" + obj.count);
console.log("this the sum of numbers array : " + obj.sum);


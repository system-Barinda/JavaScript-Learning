class barinda {
    findSmall(arr){
        arr.sort(function(a,b) {
            return a - b;
        });
        return arr[0];
    }
}
let abb = [34,345,-1,100];
const person = new barinda();
console.log(person.findSmall(abb));
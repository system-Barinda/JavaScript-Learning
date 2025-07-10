let mySetob = new Set();
mySetob.add("barinda")
mySetob.add("barinda system")
mySetob.add("barinda system sylvere")
mySetob.add("muhanga")
mySetob.add("huye")
mySetob.add("ruhango")

console.table(mySetob);

for(let items of mySetob){
    if(items === 'huye'){
        mySetob.delete(items);
    }
}

console.table(mySetob);

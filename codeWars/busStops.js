function busStops(arr){
   const removable =  arr.map((a) => {
        return a[1];
        
    });
   const sumRemovable = removable.reduce((a,b) => a + b);

   const container =  arr.map((a) => {
        return a[0];
        
    });
    const sumContainer = container.reduce((a,b) => a + b);

    return sumContainer - sumRemovable;

}
const ar = [[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]
console.log(busStops(ar))

//Flat() it used to convert all dimension of array into one dimension
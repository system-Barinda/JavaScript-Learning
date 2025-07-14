function removeEveryOther(arr){
     
    for(let i = 1; i <= arr.length; i++){
          if( i % 2 === 0){
            return arr.filter((a) => a !== arr[i]);
          }
    }   
          
}
let arra = ["Keep", "Remove", "Keep", "Remove", "Keep","barinda"];
console.log(removeEveryOther(arra));

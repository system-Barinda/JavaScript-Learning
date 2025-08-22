function countSheeps(sheep) {
   let s = [];
    for(let i = 0; i < sheep.length; i++){
        if(sheep[i] === true){
            s.push(sheep[i]);
        }
    }
    return s.length
}
const b = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true];

  console.log(countSheeps(b));
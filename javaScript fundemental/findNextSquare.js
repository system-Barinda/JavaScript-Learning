function findNextSquare(sq) {
     
    let perfectSquare = Math.sqrt(sq);
    
      if( Number.isInteger(perfectSquare)){
        let nextSquare = perfectSquare + 1;
           return nextSquare * nextSquare; 
      }
      else{
        return -1;
      }
    
}
console.log(findNextSquare(114));
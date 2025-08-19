
function dnaStrand(dna){
  let result = dna.split("").map((char) => {
      if(char === 'T'){
        return char = 'A';
      }
      else if( char == 'G'){
        return char = 'C';
      }
      else if(char == 'C'){
        return char = 'G'
      }
      else if(char == 'A'){
        return char = 'T' ;
      }
      else{
        return char;
      }
  });
 
 
  return result.joint('');
}
console.log(dnaStrand('TATC'));
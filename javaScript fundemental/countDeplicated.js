function duplicateCount(text){
  let seen = new Set();
  let deplicated = new Set();

  for(let letter of text){
    if(seen.has(letter)){
        deplicated.add(letter);
    }
    else{
        seen.add(letter)
    }
  }
  return Array.from(deplicated);
}
console.log(duplicateCount('aabduufs'));
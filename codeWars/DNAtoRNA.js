function DNAtoRNA(dna) {
  const str = dna.toUpperCase();
  const arrstr = str.split('');
  for(let char in arrstr){
    if(arrstr[char] === 'T')
    {
        arrstr[char] = 'U';
    }
  }
  return arrstr.join('');
  
}
console.log(DNAtoRNA("GCAT"))
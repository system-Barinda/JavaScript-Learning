function wave(str){
  let len = str.length;
  
  let repeatedWard = ''
  for(let char = 0 ; char < len; char++){
    repeatedWard += ' ' + str;
  }
  
 let worArr =  repeatedWard.split(' ').flat();
 worArr.shift();

return worArr.map((e,el) => e.split('').map((ind,elementt) => {
    return el == elementt ? ind.toUpperCase():ind

}).join(''))

}
console.log(wave("hello"))
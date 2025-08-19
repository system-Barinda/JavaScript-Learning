function Barinda(text){
   return text.replace(/./g, function(system) {
    return Barinda.para[system];
   })
}
Barinda.para = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}
console.log(Barinda('TTTC'))
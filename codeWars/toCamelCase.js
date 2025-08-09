function toCamelCase(str){
   let test = str.replace(/_/g,' ');
   let beTest = test.replace(/-/g, ' ')
   return beTest.split(' ')
                 .map((char) => {
                    return char[0].toUpperCase() + char.slice(1);
                 }).join('');
}
console.log(toCamelCase('the-stealth-warrior'))
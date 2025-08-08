function removeDuplicateChars(str) {
  return str
    .split(' ')                          
    .filter((char, index, arr) => arr.indexOf(char) === index) 
    .join(' ');                          
}

console.log(removeDuplicateChars("aabbccddeeff")); 
console.log(removeDuplicateChars("hello words barinda system barinda"));  

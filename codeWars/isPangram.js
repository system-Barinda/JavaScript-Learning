function isPangram(string) {
  
  const letters = string.toLowerCase().match(/[a-z]/g) || [];

  return new Set(letters).size === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog")); 
console.log(isPangram("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG")); 
console.log(isPangram("Hello world")); 
console.log(isPangram("barinda system sylver")); 
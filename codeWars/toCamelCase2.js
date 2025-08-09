function toCamelCase(str) {
  if (!str) return "";

  const words = str.split(/[-_]/);

  let firstWord = words[0];


  let restWords = words.slice(1).map(word =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );


  return firstWord + restWords.join("");
}


console.log(toCamelCase("the-stealth-warrior")); 
console.log(toCamelCase("The_Stealth_Warrior")); 
console.log(toCamelCase("The_Stealth-Warrior")); 
console.log(toCamelCase("the_Stealth-Warrior")); 

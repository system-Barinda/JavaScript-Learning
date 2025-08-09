function toCamelCase(str) {
   let test = str.replace(/_/g, ' ').replace(/-/g, ' ');
   let words = test.split(' ');

   return words
       .map((word, index) => {
           if (index === 0) return word.toLowerCase(); 
           return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
       })
       .join('');
}

console.log(toCamelCase('the-stealth-warrior')); 
console.log(toCamelCase('The_Stealth-Warrior')); 

// function toCamelCase(str) {
//   if (!str) return "";

//   let words = str.replace(/[_-]/g, " ").split(" ");

//   return words
//     .map((word, index) => {
//       if (word.length === 0) return "";
//       let lower = word.toLowerCase();
//       return index === 0
//         ? lower
//         : lower.charAt(0).toUpperCase() + lower.slice(1);
//     })
//     .join("");
// }

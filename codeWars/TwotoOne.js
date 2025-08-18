function longest(s1, s2) {
  return [...new Set(s1 + s2)]  
    .sort()                     
    .join("");                  
}


console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
// "abcdefklmopqwxy"

console.log(longest("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz"));
// "abcdefghijklmnopqrstuvwxyz"

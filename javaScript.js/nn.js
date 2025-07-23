function fromArrayToCamelCase(arr) {
  return arr
    .map((word, i) =>
      i === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1)
    )
    .join('');
}

console.log(fromArrayToCamelCase(["break", "camel", "case"])); 
// Output: "breakCamelCase"

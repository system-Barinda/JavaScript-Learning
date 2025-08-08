function removeDuplicateWords(str) {
  const seen = new Set();
  return str
    .split(/\s+/)                       
    .filter(word => {
      const lower = word.toLowerCase();
      if (seen.has(lower)) return false;
      seen.add(lower);
      return true;
    })
    .join(' ');
}

console.log(removeDuplicateWords("This is is a test test"));

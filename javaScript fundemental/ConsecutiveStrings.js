function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) return "";

  let longest = "";

  for (let i = 0; i <= strarr.length - k; i++) {
    const current = strarr.slice(i, i + k).join('');
    if (current.length > longest.length) {
      longest = current;
    }
  }

  return longest;
}
const strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"];
const k = 3;
console.log(longestConsec(strarr, k));

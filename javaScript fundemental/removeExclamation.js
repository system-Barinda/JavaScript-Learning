function removeExclamationMarks(s) {
  return s.replace(/\?/g,'X');
}
console.log(removeExclamationMarks("Hello? World!"));
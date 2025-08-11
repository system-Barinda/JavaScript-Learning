function highScoringWord(str) {
  const words = str.split(" ");

  let highestWord = "";
  let highestScore = 0;

  for (let word of words) {
  
    let score = [...word].reduce((sum, letter) => {
      return sum + (letter.charCodeAt(0) - 96); 
    }, 0);

  
    if (score > highestScore) {
      highestScore = score;
      highestWord = word;
    }
  }

  return highestWord;
}


console.log(highScoringWord("abad test zoo"));  
console.log(highScoringWord("man i need a taxi up to ubud")); 

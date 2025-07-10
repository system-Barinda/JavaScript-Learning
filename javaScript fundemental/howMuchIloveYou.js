function howMuchILoveYou(n) {
  const phrases = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all"
  ];

  
  return phrases[(n) % phrases.length];
}
console.log(howMuchILoveYou(11));


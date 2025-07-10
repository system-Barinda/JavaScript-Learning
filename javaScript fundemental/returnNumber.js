const nameee = 'i have born july 10 2025';
let bar = nameee.split(" ");
for( let key of bar){

  let word = ( nameee[key] || 0) + 1;
  console.log(word);
}



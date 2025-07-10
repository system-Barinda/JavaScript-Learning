function openOrSenior(data){
    return data.map(([age,handcap]) => age >= 55 && handcap > 7 ? "Senior": "Open");
}

const input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]];
console.log(input);
console.log(openOrSenior(input));